import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 px-8 py-4 shadow-lg rounded-lg">
      {/* Home Link */}
      <Link
        className="text-white font-semibold text-lg hover:text-gray-300 transition-all duration-200"
        href="/"
      >
        Home
      </Link>

      {/* Add Topic Button */}
      <Link
        className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        href="/AddTopic"
      >
        Add Topic
      </Link>
    </nav>
  );
}
