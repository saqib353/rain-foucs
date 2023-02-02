import React from 'react';

const Settings = ({ title, discription }) => {
  return (
    <div className="description">
      <strong>{title}</strong>
      <p>{discription}</p>
    </div>
  );
};

export default Settings;
