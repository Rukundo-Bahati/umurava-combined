import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { createChallenge } from "@/store/challengesSlice";
import { AppDispatch } from "../../../store/store";
import { RootState } from "../../../store/store";

interface FormData {
  title: string;
  deadline: string;
  duration: string;
  prize: string;
  contactEmail: string;
  description: string;
  brief: string;
  tasks: string;
  skills: string;
}

const CreateForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    deadline: "",
    duration: "",
    prize: "",
    contactEmail: "",
    description: "",
    brief: "",
    tasks: "",
    skills: "JavaScript , React",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, success } = useSelector(
    (state: RootState) => state.challenges
  );

  useEffect(() => {
    if (success) {
      router.push("/admindashboard/AdminDetails/admindetails");
    }
  }, [success, router]);

  const validateForm = () => {
    let newErrors: Partial<FormData> = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key as keyof FormData] = `${key} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formattedData = {
      ...formData,
      skills: formData.skills.split(",").map((s) => s.trim()), // Convert to an array
    };

    dispatch(createChallenge(formattedData));
  };

  return (
    <div>
      {/* Loading and Error Messages */}
      {loading && <p>Loading...</p>}
      {error && <p>{typeof error === "string" ? error : error}</p>}

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-300 rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-3xl mx-auto mt-[4rem]"
      >
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Create New Challenge
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            Fill out these details to build your broadcast
          </p>
        </div>

        {/* Form Fields */}
        {[
          { label: "Challenge/Hackathon Title", name: "title", type: "text" },
          { label: "Deadline", name: "deadline", type: "text" },
          { label: "Duration", name: "duration", type: "text" },
          { label: "Money Prize", name: "prize", type: "text" },
          { label: "Contact Email", name: "contactEmail", type: "email" },
        ].map(({ label, name, type }) => (
          <div key={name} className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor={name}
            >
              {label}
            </label>
            <input
              className={`appearance-none border ${
                errors[name as keyof FormData]
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500`}
              id={name}
              type={type}
              name={name}
              placeholder={`Enter ${label}`}
              value={formData[name as keyof FormData]}
              onChange={handleChange}
            />
            {errors[name as keyof FormData] && (
              <p className="text-red-500 text-xs mt-1">
                {errors[name as keyof FormData]}
              </p>
            )}
          </div>
        ))}

        {/* Textarea Fields */}
        {[
          { label: "Project Description", name: "description", rows: 5 },
          { label: "Project Brief", name: "brief", rows: 2 },
          { label: "Project Tasks & Description", name: "tasks", rows: 6 },
        ].map(({ label, name, rows }) => (
          <div key={name} className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor={name}
            >
              {label}
            </label>
            <textarea
              className={`appearance-none border resize-none ${
                errors[name as keyof FormData]
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500`}
              id={name}
              name={name}
              placeholder="Enter text here ..."
              value={formData[name as keyof FormData]}
              onChange={handleChange}
              rows={rows}
            />
            {errors[name as keyof FormData] && (
              <p className="text-red-500 text-xs mt-1">
                {errors[name as keyof FormData]}
              </p>
            )}
          </div>
        ))}

        <div className="flex items-center justify-between">
          <button
            type="button"
            className="border-2 border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              Object.values(formData).some((value) => !value.trim()) || loading
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={
              Object.values(formData).some((value) => !value.trim()) || loading
            }
          >
            {loading ? "Creating..." : "Create Challenge"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
