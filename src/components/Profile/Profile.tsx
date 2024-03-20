import avatar from './../../assets/img/png/Avatar.png'
import arrow from './../../assets/img/svg/arrow.svg'

import styles from "./Profile.module.scss";

export const Profile = () => {

  return (
    <>
     <div className={styles.profile_items}>

        <div className={styles.avatar}>
            <img src={avatar} alt="" />
        </div>

        <div className={styles.user_name}>
            <span className={styles.surname}>Ермаков </span>
            <span className={styles.firstNme}>Е.</span>
        </div>
        <img src={arrow} alt="" className={styles.arrow} />
     </div>
    </>
  );
};
export default Profile;
