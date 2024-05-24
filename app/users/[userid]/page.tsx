interface Props {
  params: { userid: number };
}

const UserDetailsPage = ({ params }: Props) => {
  return <div>UserDetailsPage {params.userid}</div>;
};

export default UserDetailsPage;
