import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const [user, setUser] = useState({});
    const [lastLoginTime, setLastLoginTime] = useState('');
    const [activityFeed, setActivityFeed] = useState([]);
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {

        

        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/dashboard`);

                setUser(response.data.user);
                setLastLoginTime(response.data.lastLoginTime);
                setActivityFeed(response.data.activityFeed);
                setFriendsList(response.data.friendsList);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }


        fetchData();
    }, []);

    return (
        <div>
            <h2>Welcome, {user.name}!</h2>
            <p>Last Login Time: {lastLoginTime}</p>

            <h3>Activity Feed</h3>
            <ul>
                {activityFeed.map((activity, index) => (
                    <li key={index}>{activity}</li>
                ))}
            </ul>

            <h3>Friends List</h3>
            <ul>
                {friendsList.map((friend, index) => (
                    <li key={index}>{friend.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
