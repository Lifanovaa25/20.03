import Brand from './../../assets/img/svg/Brand_footer.svg'
import bottomLogo from './../../assets/img/svg/bottom_logo.svg'
import styles from "./Footer.module.scss";
export const Footer = () => {

    return (
        <>
            <footer>
                <div className={styles.wrapper}>
                    <div className={styles.logo_col}>
                        <div className={styles.Logo}>
                            <a href="#"><img src={Brand} alt="" /></a>
                        </div>
                        <div className={styles.col}>
                            <a href="tel:+8 800 841-95-95">8 800 841-95-95</a>
                            <span>Служба поддержки</span>
                        </div>
                        <div className={styles.col}>
                            <a href="mailto:support@sport.ru">support@sport.ru</a>
                            <span>Служба поддержки</span>
                        </div>
                    </div>

                    <div className={styles.footer_nav}>

                        <a href="#" className={styles.nav_link}>Вакансии</a>
                        <a href="#" className={styles.nav_link}>Блог</a>
                        <a href="#" className={styles.nav_link}>Акции</a>
                        <a href="#" className={styles.nav_link}>Предложить  идею</a>
                    </div>
                </div>
                <div className={styles.catalog}>
                    <div className={styles.catalog_col}>
                        <a href="#" className={styles.catalog_link_title}>Женщинам</a>

                        <a href="#" className={styles.catalog_link}>Одежда</a>
                        <a href="#" className={styles.catalog_link}>Обувь</a>
                        <a href="#" className={styles.catalog_link}>Аксессуары</a>
                        <a href="#" className={styles.catalog_link}>Белье</a>
                        <a href="#" className={styles.catalog_link}>Bra fitting</a>
                    </div>

                    <div className={styles.catalog_col}>
                        <a href="#" className={styles.catalog_link_title}>Мужчинам</a>

                        <a href="#" className={styles.catalog_link}>Одежда</a>
                        <a href="#" className={styles.catalog_link}>Обувь</a>
                        <a href="#" className={styles.catalog_link}>Аксессуары</a>
                        <a href="#" className={styles.catalog_link}>Белье</a>
                    </div>
                    <div className={styles.catalog_col}>
                        <a href="#" className={styles.catalog_link_title}>Детям</a>

                        <a href="#" className={styles.catalog_link}>Одежда</a>
                        <a href="#" className={styles.catalog_link}>Обувь</a>
                        <a href="#" className={styles.catalog_link}>Аксессуары</a>
                        <a href="#" className={styles.catalog_link}>Белье</a>
                        <a href="#" className={styles.catalog_link}>Игрушки</a>
                        <a href="#" className={styles.catalog_link}>Малыши</a>
                    </div>

                    <div className={styles.catalog_col}>
                        <a href="#" className={styles.catalog_link_title}>  Виды спорта</a>

                        <a href="#" className={styles.catalog_link}>Велоспорт</a>
                        <a href="#" className={styles.catalog_link}>Туризм</a>
                        <a href="#" className={styles.catalog_link}>Тренажеры и фитнес</a>
                        <a href="#" className={styles.catalog_link}>Командные виды спорта</a>
                        <a href="#" className={styles.catalog_link}>Самокаты</a>
                    </div>
                </div>

                <div className={styles.foot}>
                    <div className={styles.social_nav}>
                        <a href="#" className={styles.social_link}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1_5932" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="17">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6295 13.3339H4.3702C4.1662 13.3339 4.0002 13.1845 4.0002 13.0005V3.00053C4.0002 2.81653 4.1662 2.6672 4.3702 2.6672H7.33354V5.43386C7.33354 6.48186 8.14487 7.33386 9.14287 7.33386H12.0002V13.0005C12.0002 13.1845 11.8335 13.3339 11.6295 13.3339V13.3339ZM11.7662 6.00053H9.14287C8.8802 6.00053 8.66687 5.74653 8.66687 5.43386V2.6672H8.74154L11.7662 6.00053ZM13.1602 5.55253L9.53087 1.55253C9.40487 1.4132 9.22554 1.33386 9.03687 1.33386H4.3702C3.43087 1.33386 2.66687 2.08186 2.66687 3.00053V13.0005C2.66687 13.9192 3.43087 14.6672 4.3702 14.6672H11.6295C12.5689 14.6672 13.3335 13.9192 13.3335 13.0005V6.00053C13.3335 5.83453 13.2715 5.6752 13.1602 5.55253V5.55253Z" fill="#828ead" />
                                </mask>
                                <g mask="url(#mask0_1_5932)">
                                    <rect width="16" height="16" transform="translate(0 0.000488281)" fill="#828ead" />
                                </g>
                            </svg>
                            PDF  презентация
                        </a>

                        <a href="#" className={styles.social_link}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1_5935" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="17">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3334 9.7335L11.4607 8.00016L13.3334 6.2675V9.7335ZM10 10.6668C10 11.0348 9.70137 11.3335 9.33337 11.3335H3.33337C2.96537 11.3335 2.66671 11.0348 2.66671 10.6668V5.3335C2.66671 4.96616 2.96537 4.66683 3.33337 4.66683H9.33337C9.70137 4.66683 10 4.96616 10 5.3335V10.6668ZM14.008 4.76416C13.5907 4.58216 13.1067 4.6615 12.774 4.96816L11.3334 6.3015V5.3335C11.3334 4.23083 10.436 3.3335 9.33337 3.3335H3.33337C2.23071 3.3335 1.33337 4.23083 1.33337 5.3335V10.6668C1.33337 11.7702 2.23071 12.6668 3.33337 12.6668H9.33337C10.436 12.6668 11.3334 11.7702 11.3334 10.6668V9.6995L12.774 11.0322C12.9874 11.2302 13.264 11.3335 13.546 11.3335C13.702 11.3335 13.8587 11.3022 14.008 11.2368C14.414 11.0595 14.6667 10.6802 14.6667 10.2475V5.7535C14.6667 5.32083 14.414 4.9415 14.008 4.76416V4.76416Z" fill="#828ead" />
                                </mask>
                                <g mask="url(#mask0_1_5935)">
                                    <rect width="16" height="16" transform="translate(0 0.000488281)" fill="#77829E" />
                                </g>
                            </svg>

                            Видео инструкция
                        </a>

                        <a href="#" className={styles.social_link}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1_5938" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="16" height="17">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.33331 5.33386C7.33331 4.96586 7.63198 4.6672 7.99998 4.6672C8.36798 4.6672 8.66665 4.96586 8.66665 5.33386C8.66665 5.70186 8.36798 6.00053 7.99998 6.00053C7.63198 6.00053 7.33331 5.70186 7.33331 5.33386ZM7.33331 7.33386C7.33331 6.96586 7.63198 6.6672 7.99998 6.6672C8.36798 6.6672 8.66665 6.96586 8.66665 7.33386V10.6672C8.66665 11.0352 8.36798 11.3339 7.99998 11.3339C7.63198 11.3339 7.33331 11.0352 7.33331 10.6672V7.33386ZM7.99998 13.3339C5.05931 13.3339 2.66665 10.9412 2.66665 8.00053C2.66665 5.05986 5.05931 2.6672 7.99998 2.6672C10.9406 2.6672 13.3333 5.05986 13.3333 8.00053C13.3333 10.9412 10.9406 13.3339 7.99998 13.3339M7.99998 1.33386C4.31798 1.33386 1.33331 4.31853 1.33331 8.00053C1.33331 11.6825 4.31798 14.6672 7.99998 14.6672C11.6813 14.6672 14.6666 11.6825 14.6666 8.00053C14.6666 4.31853 11.6813 1.33386 7.99998 1.33386"
                                        fill="#77829E" />
                                </mask>
                                <g mask="url(#mask0_1_5938)">
                                    <rect width="16" height="16" transform="translate(0 0.000488281)" fill="#77829E" />
                                </g>
                            </svg>

                            FAQ
                        </a>
                        <a href="#" className={styles.social_link}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1_5941" maskUnits="userSpaceOnUse" x="0" y="0"
                                    width="16" height="17">
                                    <path
                                        d="M14.3863 4.72454C14.2348 4.17974 13.7803 3.74963 13.2045 3.5991C12.1666 3.33386 7.99998 3.33386 7.99998 3.33386C7.99998 3.33386 3.83331 3.33386 2.78786 3.5991C2.2121 3.74246 1.76513 4.17257 1.60604 4.72454C1.33331 5.71379 1.33331 7.77831 1.33331 7.77831C1.33331 7.77831 1.33331 9.84282 1.61362 10.8321C1.76513 11.3769 2.21968 11.807 2.79543 11.9575C3.83331 12.2228 7.99998 12.2228 7.99998 12.2228C7.99998 12.2228 12.1666 12.2228 13.2121 11.9575C13.7879 11.8141 14.2348 11.384 14.3939 10.8321C14.6666 9.84282 14.6666 7.77831 14.6666 7.77831C14.6666 7.77831 14.6666 5.71379 14.3863 4.72454ZM6.63634 9.65644V5.90017L10.1212 7.77831L6.63634 9.65644Z"
                                        fill="#77829E" />
                                </mask>
                                <g mask="url(#mask0_1_5941)">
                                    <rect width="16" height="16" transform="translate(0 0.000488281)" fill="#77829E" />
                                </g>
                            </svg>

                            Мы на YouTube
                        </a>
                        <a href="#" className={styles.social_link}>
                            Политика конфиденциальности
                        </a>
                        <a href="#" className={styles.social_link}>
                            Лицензионное соглашение
                        </a>
                    </div>
                </div>
                <div className={styles.foot_p}>
                    <p>
                        Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией Российской Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации, информационных технологиях и о защите информации",
                    </p>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.Logo}>
                        <a href="#"><img src={bottomLogo} alt="" /></a>
                    </div>
                    <a href="#" className={styles.gray_link}>Разработка платформы</a>

                </div>
            </footer>
        </>
    );
};
export default Footer;
