import { useState } from 'react';
import ProfileLogo from '../../assets/images/Rectangle 12.png';
import TogglerMenuIcon from '../../assets/images/icons8-menu-rounded-50.png';
import Light from '../../assets/images/light.png';
import Dark from '../../assets/images/dark.png';

const ProfileHeader = ({ setIsOpen, setLight }) => {
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleTheme = () => {
    setDark((prev) => !prev);
    setLight((prev) => !prev);
  };
  return (
    <div className="profile-header">
      <div className="icon">
        <img src={ProfileLogo} alt="profile-logo" />
      </div>
      <div className="details">
        <div className="title">
          <div className="rain-foucs-title">RainFocus Submit</div>
          <div className="menu-toggler-and-edit-btn">
            <div className="btn">
              <img src={dark ? Dark : Light} alt="theme toggler" className="theme-toggler" onClick={handleTheme} />
              <button className="edit-event-btn">EDIT EVENT</button>
            </div>
            <img src={TogglerMenuIcon} alt="toggler" onClick={handleClick} />
          </div>
        </div>
        <div>December 15th</div>
        <div>Lehi, Utah</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
