import ProfileLogo from '../../assets/images/Rectangle 12.png';
import TogglerMenuIcon from '../../assets/images/icons8-menu-rounded-50.png';

const ProfileHeader = () => {
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
