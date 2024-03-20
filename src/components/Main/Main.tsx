import ProductCard from '../ProductCard/ProductCard';
import cart from './../../assets/img/svg/cart_Icon.svg'
import styles from "./Main.module.scss";

export const Main = () => {

  return (
    <>
      <div className={styles.container}>

        <div className={styles.breadcrumbs}> <span>Каталог</span> /  <span>Обувь</span>  / <span>Кроссовки</span>  /  <span>Беговые</span> </div>

        <ProductCard />
      </div>
    </>
  );
};
export default Main;
