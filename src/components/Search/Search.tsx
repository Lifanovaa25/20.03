import Delete from './../../assets/img/svg/X_Icon.svg'
import Seurch from './../../assets/img/svg/search_Icon.svg'

import styles from "./Search.module.scss";

export const Search = () => {
 
  return (
    <>
    <div className={styles.searchContainer}>
        <input type="text" className={styles.searchLine} placeholder="Название запроса" />
        <div className={styles.search_btns}>
            <img src={Delete} alt="" />
            <img src={Seurch} alt="" />
        </div>
    </div>
  
    </>
  );
};
export default Search;
