interface Props {
  params: { slug: string[] };
  searchParams: { order: string };
}

const ProductPage = ({ params: { slug }, searchParams: { order } }: Props) => {
  return <div>ProductPage {slug}, sort {order}</div>;
};

export default ProductPage;
