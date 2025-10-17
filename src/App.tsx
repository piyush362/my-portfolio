import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      {/* Homepage route */}
      <Route path="/" element={<Homepage />} />

      {/* Dynamic Project Detail route */}
      <Route
        path="/projectDetails/:projectId"
        element={<ProjectDetailPage />}
      />

      {/* 404 Not Found route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
