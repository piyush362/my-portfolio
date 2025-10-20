import { motion } from "framer-motion";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white text-center px-4">
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-8xl font-extrabold text-blue-600"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-gray-700 text-lg md:text-xl"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 transition-all"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
