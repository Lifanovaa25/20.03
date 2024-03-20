
import messanger from './../../assets/img/svg/message.svg'
import sale from './../../assets/img/svg/sale.svg'

import styles from "./SubMenu.module.scss";

export const SubMenu = () => {

    return (
        <>
            <div className={styles.sub_menu}>

                <div className={styles.navigation}>
                    <button className={styles.nav_btn}>Мои заказы</button>
                    <button className={styles.nav_btn}>Сотрудники</button>
                    <button className={styles.nav_btn}>Шаблоны заказов</button>
                    <button className={styles.nav_btn}>Обращения</button>
                </div>
                <div className={styles.user_nav}>
                    <button className={styles.user_nav_btn}> <img src={messanger} alt="" /> Ваш менеджер</button>
                    <button className={styles.user_nav_btn}> <img src={sale} alt="" /> Акции</button>
                    <button className={styles.user_nav_btn}> Блог</button>
                </div>
            </div>
        </>
    );
};
export default SubMenu;
