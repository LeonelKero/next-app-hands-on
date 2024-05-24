
interface Props {
  users: User[];
}

const UserItem = ({ users }: Props) => {
  return (
    <>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </>
  );
};

export default UserItem;
