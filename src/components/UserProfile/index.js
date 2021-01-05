import React from 'react';
import './styles.scss';


const UserProfile = props => {
  const { currentUser } = props;
  const { displayName } = currentUser;

  return (
    <div className="userProfile">
      <ul>
        <li>
          <div className="img">
            {/* <img src={} /> */}
          </div>
        </li>
        <li>
          <span className="displayName">
            {displayName && displayName}
          </span> 
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;