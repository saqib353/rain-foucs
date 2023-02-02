import { useState } from 'react';
import '../../../sass/subMenu.scss';

const SidebarMenu = ({ sidebar = [], setIsOpen }) => {
  const [active, setActive] = useState({ id: '', open: false });

  const handleClick = (id) => {
    setActive((p) => (id === p.id ? { id, open: !p.open } : { id, open: true }));
  };

  return sidebar.map((item, index) => {
    const isActive = item.id === active.id;
    return (
      <div key={index}>
        <div className={`menu-item ${isActive ? 'active' : ''}`} onClick={() => handleClick(item.id)}>
          <div className="menu-icon"></div>
          <div>{item.text}</div>
        </div>
        {isActive && active.open ? (
          <ul className="sub-menu-list">
            {item.subMenu.length ? (
              item.subMenu.map((menu) => (
                <li key={menu.id} onClick={() => setIsOpen && setIsOpen((prev) => !prev)}>
                  {menu.text}
                </li>
              ))
            ) : (
              <cite className="empty">Empty</cite>
            )}
          </ul>
        ) : null}
      </div>
    );
  });
};

export default SidebarMenu;
