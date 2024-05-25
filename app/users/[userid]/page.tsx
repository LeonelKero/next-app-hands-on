import { notFound } from "next/navigation";

interface Props {
  params: { userid: number };
}

const UserDetailsPage = ({ params }: Props) => {
  if (params.userid > 10) notFound();

  return <div>UserDetailsPage {params.userid}</div>;
};

export default UserDetailsPage;
