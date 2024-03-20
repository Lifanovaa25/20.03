
import menuIcon from './../../assets/img/svg/menuIcon.svg'
import styles from "./Menu.module.scss";

export const Menu = () => {
 
  return (
    <>
    <button className={styles.menu_btn}>
        <img src={menuIcon} alt="" />Меню
    </button>
    </>
  );
};
export default Menu;
