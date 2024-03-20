
import preview from './../../assets/img/png/preview.png'
import item1 from './../../assets/img/png/item1.png'
import item2 from './../../assets/img/png/item2.png'
import item3 from './../../assets/img/png/item3.png'
import item4 from './../../assets/img/png/item4.png'
import arrow_next from './../../assets/img/svg/arrow_next.svg'
import styles from "./ProductCard.module.scss";

export const ProductCard = () => {

    return (
        <>
            <div className={styles.card}>

                <div className={styles.product_preview}>
                    <div className={styles.preview}>
                        <img src={preview} alt="" />
                    </div>

                    <div className={styles.carousel}>
                        <div className={styles.arrow_prev}>
                            <img src={arrow_next} alt="" />
                        </div>
                        <div className={styles.items}>
                            <div className={styles.item}>
                                <img src={item1} alt="" />
                            </div>
                            <div className={styles.item}>
                                <img src={item2} alt="" />
                            </div>

                            <div className={styles.item}>
                                <img src={item3} alt="" />
                            </div>

                            <div className={styles.item}>
                                <img src={item4} alt="" />
                            </div>
                        </div>
                        <div className={styles.arrow_next}>
                            <img src={arrow_next} alt="" />
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};
export default ProductCard;
