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
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
