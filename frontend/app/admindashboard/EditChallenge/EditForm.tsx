import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface FormData {
  title: string;
  deadline: string;
  duration: string;
  prize: string;
  contactEmail: string;
  brief: string;
  description: string;
  requirements: string;
  deliverables: string;
}

const EditForm: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const challengeId = searchParams.get("id"); // Extract challenge ID from URL query params

  const [formData, setFormData] = useState<FormData>({
    title: "",
    deadline: "",
    duration: "",
    prize: "",
    contactEmail: "",
    brief: "",
    description: "",
    requirements: "",
    deliverables: "",
  });

  useEffect(() => {
    if (!challengeId) return;

    const fetchChallenge = async () => {
      try {
        const response = await fetch(`/api/challenges/${challengeId}`);
        if (!response.ok) throw new Error("Failed to fetch challenge data");

        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching challenge:", error);
      }
    };

    fetchChallenge();
  }, [challengeId]);

  const handleUpdate = () => {
    router.push("/admindashboard/AdminDetails/admindetails");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/challenges/${challengeId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to update challenge");

      alert("Challenge updated successfully!");
      handleUpdate();
    } catch (error) {
      console.error("Error updating challenge:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-300 rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-3xl mx-auto mt-[4rem]"
    >
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Edit Challenge</h2>
        <p className="text-gray-600 text-lg mt-2">
          Fill out these details to build your broadcast
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          type="text"
          name="title"
          className="border border-gray-300 rounded-lg w-full py-3 px-4"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Deadline
          </label>
          <input
            type="text"
            name="deadline"
            className="border border-gray-300 rounded-lg w-full py-3 px-4"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Duration
          </label>
          <input
            type="text"
            name="duration"
            className="border border-gray-300 rounded-lg w-full py-3 px-4"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Prize</label>
          <input
            type="text"
            name="prize"
            className="border border-gray-300 rounded-lg w-full py-3 px-4"
            value={formData.prize}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Contact Email
          </label>
          <input
            type="email"
            name="contactEmail"
            className="border border-gray-300 rounded-lg w-full py-3 px-4"
            value={formData.contactEmail}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Brief</label>
        <textarea
          name="brief"
          className="border border-gray-300 rounded-lg w-full py-3 px-4"
          value={formData.brief}
          onChange={handleChange}
          rows={2}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Description
        </label>
        <textarea
          name="description"
          className="border border-gray-300 rounded-lg w-full py-3 px-4"
          value={formData.description}
          onChange={handleChange}
          rows={5}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Requirements
        </label>
        <textarea
          name="requirements"
          className="border border-gray-300 rounded-lg w-full py-3 px-4"
          value={formData.requirements}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Deliverables
        </label>
        <textarea
          name="deliverables"
          className="border border-gray-300 rounded-lg w-full py-3 px-4"
          value={formData.deliverables}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          className="border-2 border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Update Challenge
        </button>
      </div>
    </form>
  );
};

export default EditForm;
