import React from 'react';

function ProfileList({ profiles, onProfileClick }) {
  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <div key={profile.id} className="profile-item" onClick={() => onProfileClick(profile)}>
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProfileList;