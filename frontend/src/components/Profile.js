import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function Profile() {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API/api/v1/auth/Profile}`);

        setUser(response.data.user);
        setName(response.data.user.name);
        setEmail(response.data.user.email);
        setBio(response.data.user.bio);
        setProfileImage(response.data.user.profileImage);
      } catch (error) {
        console.error('Error fetching user profile data:', error);
      }
    }

    fetchData();
  }, []);

  const handleUpdateProfile = async () => {

    try {
      const response = await axios.post('/api/user/update-profile', {
        name,
        email,
        bio,
        profileImage,
      });

      if (response.data.success) {
        setIsEditMode(false);
      } else {
        console.error('Profile update failed.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <img src={profileImage} alt="Profile" />

      {isEditMode ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <button onClick={handleUpdateProfile}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
          <button onClick={() => setIsEditMode(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
