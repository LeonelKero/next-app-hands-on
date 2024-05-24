interface Props{
    searchParams: {id: number}
}

const CartPage = ({searchParams: {id}}:Props) => {
  return <div>This is the content of cart {id}</div>;
};

export default CartPage;
