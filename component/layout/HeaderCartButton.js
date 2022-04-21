import styles from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import { useRouter } from "next/router";

const HeaderCartButton = (props) => {
  const router = useRouter();

  const CartPage = () => {
    router.push("/Cart");
  };

  return (
    <button className={styles.button} onClick={CartPage}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
