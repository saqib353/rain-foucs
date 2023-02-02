import AttendeeLogo from '../../assets/images/Person Portal.png';
import AddLogo from '../../assets/images/Add Shape.png';

import { registration, experiences, settings } from '../../data/data';
import AttendeeDiscription from './AttendeeDiscription';
import Settings from './Settings';
const Attendee = () => {
  return (
    <div className="attendee">
      <div className="title">
        <div className="logo">
          <img src={AttendeeLogo} alt="attendee logo" />
        </div>
        <div className="text">Attendee</div>
      </div>
      <div className="attendee-step-1">
        <div className="header">
          <strong>Step 1:</strong>
          <p>Base settings</p>
        </div>
        <div className="attendee-content">
          {settings.map((item) => (
            <Settings key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="attendee-step-2">
        <div className="header">
          <strong>Step 2:</strong>
          <p>Build registration workflow</p>
        </div>
        <div className="attendee-content">
          {registration.map((item) => (
            <AttendeeDiscription key={item.id} {...item} />
          ))}
          <div className="description add-attendee">
            <div className="description-logo">
              <img src={AddLogo} alt="Add Attendee" />
            </div>
            <p>Add Registration workflow</p>
          </div>
        </div>
      </div>
      <div className="attendee-step-3">
        <div className="header">
          <strong>Step 3:</strong>
          <p>Design post-registration experiences</p>
        </div>
        <div className="attendee-content">
          {experiences.map((item) => (
            <AttendeeDiscription key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attendee;
