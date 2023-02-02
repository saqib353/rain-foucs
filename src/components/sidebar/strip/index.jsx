import Logo from '../../../assets/images/Icon.png';
import TextInitials from '../../../assets/images/Initials.png';
import '../../../sass/strip.scss';
const Leftbar = () => {
  return (
    <div className="icons">
      <div className="upper-icon">
        <div className="icon-dot">
          <div className="letter r-letter">r</div>
          <div className="letter f-letter">f</div>
          <div className="dot first-dot"></div>
          <div className="dot second-dot"></div>
          <div className="dot third-dot"></div>
        </div>
        <div className="icon-logo">
          <img src={Logo} alt="Rain focus" />
        </div>
      </div>
      <div className="text-initials">
        <img src={TextInitials} alt="Text initals" />
      </div>
    </div>
  );
};

export default Leftbar;
