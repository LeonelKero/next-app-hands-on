import Link from "next/link";
import { Suspense } from "react";
import UsersTable from "./UsersTable";

interface Props {
  searchParams: { sort: string };
}

const UsersPage = async ({ searchParams: { sort } }: Props) => {
  return (
    <>
      <Link href={"/users/new"}>Create</Link>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
        <UsersTable sortCriteria={sort} />
      {/* </Suspense> */}
    </>
  );
};

export default UsersPage;
