import Link from "next/link";

function NavBar() {
  return (
    <div className="text-xl text-white  p-3 bg-blue-600 flex justify-center space-x-2">
      <Link className="hover:text-red-400" href="/">Songs</Link>
      <Link className="hover:text-red-400" href="/create">Create</Link>
    </div>
  );
}

export default NavBar;
