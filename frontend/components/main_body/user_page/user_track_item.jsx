import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const UserTrackItem = ({track}) => (
  <div>
    <Link to={`/tracks/${track.id}`}>{track.title}</Link>
  </div>
);

export default UserTrackItem;
