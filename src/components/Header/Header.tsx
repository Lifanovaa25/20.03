import Menu from './../Menu/Menu';

import Brand from './../../assets/img/svg/Brand.svg'
import alert from './../../assets/img/svg/alert_Icon.svg'
import favorite from './../../assets/img/svg/favorite_Icon.svg'

import Search from '../Search/Search';
import Basket from '../Basket/Basket';
import Profile from '../Profile/Profile';

import s from "./Header.module.scss";
import SubMenu from '../SubMenu/SubMenu';
export const Header = () => {

  return (
    <>
      <header className={s.header}>
        <div className={s.container}>

          <div className={s.Logo}>
            <a href="#"><img src={Brand} alt="" /></a>
          </div>

          <Menu />
          <Search />

          <div className={s.alerts}>
            <img src={alert} alt="" />
            <div className={s.separator}></div>
            <img src={favorite} alt="" className={s.favorite} />
          </div>

          <Basket />
          <Profile />
        </div>
        <SubMenu />
      </header>
    </>
  );
};
export default Header;
