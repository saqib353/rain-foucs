import React from 'react';
import ProfileHeader from './ProfileHeader';
import '../../sass/profile.scss';
import Attendee from './Attendee';
import Guide from './Guide';

const Profile = (props) => {
  return (
    <section className="profile">
      <ProfileHeader {...props} />
      <Guide />
      <Attendee />
    </section>
  );
};

export default Profile;
