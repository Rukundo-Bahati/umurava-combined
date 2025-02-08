import { Button } from "@/components/ui/button";
import { Mail, FileText, Calendar, DollarSign } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import router from "next/router";
import { fetchChallengeById } from "@/store/challengesSlice";

export default function ProjectBrief() {
  const searchParams = useSearchParams();
  const challengeId = searchParams.get("id");

  const dispatch = useDispatch<AppDispatch>();
  const { challenge, loading, error } = useSelector(
    (state: RootState) => state.challenges
  );

  useEffect(() => {
    if (challengeId) {
      dispatch(fetchChallengeById(challengeId));  // Dispatch the action with the challengeId
    }
  }, [challengeId, dispatch]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  if (!challenge) {
    return <div className="text-center mt-10 text-red-500">Challenge not found</div>;
  }

  const handleEdit = () => {
    router.push(`/admindashboard/EditChallenge?id=${challengeId}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-[#2B71F0] p-8 rounded-lg flex items-center justify-center">
            <div className="flex flex-col items-center">
              <Image src="/images/logo2.png" alt="Umurava Logo" width={60} height={20} />
              <h2 className="flex text-center text-white mt-5 text-2xl">Umurava</h2>
            </div>
          </div>

          {/* Project Title */}
          <div>
            <h2 className="text-xl font-bold">Project Brief: {challenge.title}</h2>
            <p className="text-gray-700 my-3">{challenge.description}</p>
          </div>

          {/* Tasks Section */}
          <div>
            <h2 className="font-semibold mb-2">Tasks:</h2>
            <p className="text-gray-700">{challenge.tasks || "No tasks available."}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-6 space-y-6">
            <h2 className="font-semibold">Key Instructions:</h2>
            <p className="text-sm text-gray-600">
              You are free to schedule the clarification call with the team via this
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">{challenge.email}</div>
                  <div className="text-sm text-gray-500">Contact Email</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">{challenge.skills.join(", ")}</div>
                  <div className="text-sm text-gray-500">Skills</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">{challenge.timeline}</div>
                  <div className="text-sm text-gray-500">Timeline</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">${challenge.prize}</div>
                  <div className="text-sm text-gray-500">Money Prize</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="destructive" className="flex-1 bg-red-600 hover:bg-red-700">
                Delete
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={handleEdit}>
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
