import Link from "next/link";
import UsersTable from "./UsersTable";

const UsersPage = async () => {
  return (
    <>
      <div>UsersPage</div>
      <Link href={"/users/new"}>Create</Link>
      <UsersTable />
    </>
  );
};

export default UsersPage;
