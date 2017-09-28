import React from 'react';

export const UserNotFound = () => {
  return (
    <div className="error-page">
      <div className="error-title">Uh oh</div>
      <div className="error-img"><i className="fa fa-search" /></div>
      <div className="error-description">We can't find that user.</div>
    </div>
  );
};
