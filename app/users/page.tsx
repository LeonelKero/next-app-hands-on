import Link from "next/link";
import UsersTable from "./UsersTable";

interface Props{
  searchParams: {sort: string}
}

const UsersPage = async ({searchParams: {sort}}: Props) => {
  console.log('SORT PARAM', sort);
  
  return (
    <>
      <div className="py-4 text-4xl text-gray-500 font-mono">Company Staff</div>
      <Link href={"/users/new"}>Create</Link>
      <UsersTable sortCriteria={sort} />
    </>
  );
};

export default UsersPage;
