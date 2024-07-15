import React, { useState } from 'react';
import styles from './UserProfile.module.css';
import Image from 'next/image';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA'
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value
    }));
  };

  const saveProfile = () => {
    setIsEditing(false);
    // Optionally, you can save the profile data to backend or perform other actions here
  };

  return (
    <div className={styles['profile-container']}>
      <h1>User Profile</h1>
      <div className={styles['profile-details']}>
        {/* <Image
          src="https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_640.jpg"
          alt="Profile Picture"
          className={styles['profile-picture']}
          width={100}
          height={100} // Set the width and height according to your design requirements
        /> */}
        <div className={styles.details}>
          <h2>{profile.name}</h2>
          <p>Email: {profile.email}</p>
          <p>Phone: {profile.phone}</p>
          <p>Address: {profile.address}</p>
        </div>
      </div>
      <button className={styles['edit-button']} onClick={toggleEdit}>Edit Profile</button>
      {isEditing && (
        <div className={styles['edit-form']}>
          <h3>Edit Profile</h3>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={profile.name} onChange={handleInputChange} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={profile.email} onChange={handleInputChange} />
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" value={profile.phone} onChange={handleInputChange} />
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={profile.address} onChange={handleInputChange} />
          <button className={styles['save-button']} onClick={saveProfile}>Save</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
