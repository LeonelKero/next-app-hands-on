
interface Props {
  params: { userid: number, photoid: number };
}

const PhotoDetailsPage = ({params}:Props) => {
  return <div>PhotoDetailsPage User {params.userid} Photo {params.photoid}</div>;
};

export default PhotoDetailsPage;
