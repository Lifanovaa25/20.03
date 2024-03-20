
import preview from './../../assets/img/png/preview.png'
import item1 from './../../assets/img/png/item1.png'
import item2 from './../../assets/img/png/item2.png'
import item3 from './../../assets/img/png/item3.png'
import item4 from './../../assets/img/png/item4.png'
import arrow_next from './../../assets/img/svg/arrow_next.svg'

import add from './../../assets/img/svg/add.svg'
import delete_btn from './../../assets/img/svg/del.svg'

import cart from './../../assets/img/svg/white_cart.svg'
import favourite from './../../assets/img/svg/favourite_btn.svg'
import styles from "./ProductCard.module.scss";
import { useState } from 'react'

export const ProductCard = () => {
    const [inBasket, setInBasket] = useState(false)
    const [count, setCount] = useState(1)
    const [title, setTitle] = useState('штук')

    function countTitle(count: number) {
        if (count > 10 && [11, 12, 13, 14].includes(count % 100)) return 'штук';
        var last_num = count % 10;
        if (last_num == 1) setTitle('штука');
        if ([2, 3, 4].includes(last_num)) setTitle('штуки');
        if ([5, 6, 7, 8, 9, 0].includes(last_num)) setTitle('штук');
    }
    function addCount() {
        setCount(count + 1)
        countTitle(count+1);
    }
    function addToBasket() {
        setInBasket(!inBasket)
        countTitle(count);

    }
    function deleteCount() {

        if (count === 1) {
            setInBasket(!inBasket)
        } else {
            setCount(count - 1)
            countTitle(count-1);

        }

    }
    return (
        <>
            <div className={styles.productName}>Кроссовки мужские Skechers Sunny Dale</div>
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
                <div className={styles.details}>
                    <div className={styles.price_item}>
                        <div className={styles.price_details}>
                            <div className={styles.top}>
                                <div className={styles.without_discount}>166 534.00 цена без скидки</div>
                                <div className={styles.discount}>122 566 ₽ <span className={styles.discount_size}>-15%</span></div>

                                <div className={styles.order_details}>
                                    <div className={styles.order_span}>12 штук в уп.</div>

                                    <label className={styles.checkbox_ios}>
                                        <input type="checkbox" />
                                        <span className={styles.checkbox}></span>
                                        Заказ упаковкой
                                    </label>
                                </div>

                            </div>
                            <div className={styles.line}></div>
                            {/* <div className={styles.bottom}> */}
                            <div className={styles.details_grid}>
                                <div className={styles.detail_item}>
                                    <span>Завтра</span>
                                    Доставка
                                </div>
                                <div className={styles.detail_item}>
                                    <span>7 шт.</span>
                                    Тарасовка
                                </div>
                                <div className={styles.detail_item}>
                                    <span>7 шт.</span>
                                    Тарасовка
                                </div>
                            </div>

                            {/* </div>   */}
                            <div className={styles.buttons_item}>
                                {!inBasket ? (
                                    <button className={styles.add_to_basket} onClick={() => addToBasket()}>
                                        <img src={cart} alt="В корзину" />В корзину
                                    </button>) : (
                                    <div className={styles.product_count}>
                                        <button className={styles.delete} onClick={() => deleteCount()}>
                                            <img src={delete_btn} alt="" />
                                        </button>
                                        {count} {title}
                                        <button className={styles.add} onClick={() => addCount()}>
                                            <img src={add} alt="" />
                                        </button>

                                    </div>
                                )}
                                <button className={styles.favourite_btn}>
                                    <img src={favourite} alt="" />

                                </button>
                            </div>
                        </div>
                        <div className={styles.beekLine}></div>
                        <div className={styles.specifications}>
                            <h3 className={styles.specifications__title}>Характеристики</h3>
                            <div className={styles.specifications_grid}>

                                <div className={styles.__item}>
                                    <div className={styles.__value}>ELC00696</div>
                                    <div className={styles.__name}>Код поставщика</div>
                                </div>
                                <div className={styles.__item}>
                                    <div className={styles.__value}>ELC0200000696</div>
                                    <div className={styles.__name}>Артикул</div>
                                </div>
                                <div className={styles.__item}>
                                    <div className={styles.__value}>ELC00696</div>
                                    <div className={styles.__name}>Код РАЭК</div>
                                </div>
                                <div className={styles.__item}>
                                    <div className={styles.__value}>ELC00696</div>
                                    <div className={styles.__name}>Код ЕТМ</div>
                                </div>
                                <div className={styles.__item}>
                                    <div className={styles.__value}>Electric used</div>
                                    <div className={styles.__name}>Бренд</div>
                                </div>
                                <div className={styles.__item}>
                                    <div className={styles.__value}> ELC00696</div>
                                    <div className={styles.__name}>Серия</div>
                                </div>
                                <div className={styles.__item}>
                                    <div className={styles.__value}> ELC0200000696 </div>
                                    <div className={styles.__name}>Код производителя</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3 className={styles.title}>Описание товара</h3>
                        <p>Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации. CTR существенно индуцирует из ряда вон выходящий SWOT-анализ. Воздействие на потребителя определяет возрастающий интеграл по поверхности, что известно даже школьникам. Отсюда естественно следует, что коммуникация уравновешивает косвенный фактор коммуникации. Поле направлений естественно допускает экспериментальный скачок функции, таким образом сбылась мечта идиота - утверждение полностью доказано. Арифметическая прогрессия притягивает линейно зависимый пул лояльных изданий.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProductCard;
