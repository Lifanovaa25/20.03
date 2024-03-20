import cart from './../../assets/img/svg/cart_Icon.svg'
import styles from "./Basket.module.scss";

export const Basket = () => {
 
  return (
    <>
   <button className={styles.basket_btn}>
    <img src={cart} alt="" />
    
    <span className={styles.amount}>144 235 ₽</span>
    </button>
    </>
  );
};
export default Basket;
