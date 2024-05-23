import AddToCart from "../AddToCart/AddToCart";
import styles from "./ProductCart.module.css";

const ProductCart = () => {
  return (
    <div className={styles.cart}>
      <AddToCart />
    </div>
  );
};

export default ProductCart;
