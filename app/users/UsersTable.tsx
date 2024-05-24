import Link from "next/link";
import UserItem from "./UserItem";
import { sort } from "fast-sort";

interface Props {
  sortCriteria: string;
}

const UsersTable = async ({ sortCriteria }: Props) => {
  
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 10, // refresh data in cache after 10s
    },
  });
  const users: User[] = await response.json();

  const sortedUsers = sort(users).asc(
    sortCriteria === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>
            <Link href={"/users?sort=name"}>NAME</Link>
          </th>
          <th>
            <Link href={"/users?sort=email"}>EMAIL</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        <UserItem users={sortedUsers} />
      </tbody>
    </table>
  );
};

export default UsersTable;
