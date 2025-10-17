import { Link } from "react-router";
import { ArrowLeftCircle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white text-center px-6">
      <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
      <p className="text-gray-400 text-lg mb-8">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full transition"
      >
        <ArrowLeftCircle size={18} />
        Go Back Home
      </Link>
    </div>
  );
}
