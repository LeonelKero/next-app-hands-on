import Link from "next/link";

const NavBar = () => {
  return <div className="flex p-5 bg-slate-50">
    <Link href={"/"} className="me-4 text-xl hover:text-orange-500">Next</Link>
    <Link href={"/users"} className="me-4 text-xl hover:text-orange-500">Users</Link>
  </div>;
};

export default NavBar;