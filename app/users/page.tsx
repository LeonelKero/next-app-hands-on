import Link from "next/link";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 10, // refresh data in cache after 10s
    },
  });
  const users: User[] = await response.json();

  return (
    <>
      <div>UsersPage</div>
      <Link href={"/users/new"}>Create</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            I am {user.name}, but you can call me {user.username} and my email
            is {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;