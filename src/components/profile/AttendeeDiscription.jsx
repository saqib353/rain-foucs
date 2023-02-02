import React from 'react';

const AttendeeDiscription = ({ icon, title, discription }) => {
  return (
    <div className="description">
      <div className="description-title">
        <div className="description-logo">
          <img src={icon} alt="Arrow logo" />
        </div>
        <strong>{title}</strong>
      </div>
      <p>{discription}</p>
    </div>
  );
};

export default AttendeeDiscription;
