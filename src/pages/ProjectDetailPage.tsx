import { useParams } from "react-router";

export default function ProjectDetailPage() {
  const { projectId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Project Detail Page</h1>
      <p className="mt-2 text-gray-500">Project ID: {projectId}</p>
    </div>
  );
}
