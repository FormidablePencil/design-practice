import React from 'react'
import './index.scoped.sass'

function template({ profileImage, greeting, profileName }) {
  return (
    <div className="container">
      <div className="profile-container">
        <img src={profileImage} alt='profile' />

        <div className="text-container">
          <p className="greeting">{greeting},</p>
          <p className="profile-name">{profileName}</p>
        </div>
      </div>

      <button className="settings">S</button>
    </div>
  )
}

export default template
