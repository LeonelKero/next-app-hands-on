import Link from "next/link";
import UsersTable from "./UsersTable";

interface Props {
  searchParams: { sort: string };
}

const UsersPage = async ({ searchParams: { sort } }: Props) => {
  return (
    <>
      <Link href={"/users/new"}>Create</Link>
      <UsersTable sortCriteria={sort} />
    </>
  );
};

export default UsersPage;
