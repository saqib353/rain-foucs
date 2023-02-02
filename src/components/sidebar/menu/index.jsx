import SearchIcon from '../../../assets/images/Shape.png';
import { sidebarMenu } from '../../../data/data';
import '../../../sass/menu.scss';
import SidebarMenu from './SidebarMenu';

const Menu = ({ setIsOpen }) => {
  return (
    <div className="menu">
      <div className="title">RainFoucs Submit</div>
      <div className="subtitle">Lehi, UT, December 15th</div>

      <div className="search-input">
        <img src={SearchIcon} alt="search icon" />
        <input type="search" placeholder="Search" />
      </div>
      <div className="menu-content">
        <SidebarMenu sidebar={sidebarMenu} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Menu;
