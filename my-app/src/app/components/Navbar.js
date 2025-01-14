import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-11 py-3 rounded-xl ">
      <Link className="text-white font-bold " href={"/"}>
        Home
      </Link>
<Link
  className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
  href="/AddTopic"
>
  Add Topic
</Link>
    </nav>
  );
}
