// src/components/AdminDashboard.js
import React, { useState } from 'react';

function Admin() {
    const [videos, setVideos] = useState([]);

    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const videoURL = URL.createObjectURL(file);
            setVideos([...videos, videoURL]);
        }
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <input type="file" accept="video/*" onChange={handleUpload} />
            <ul>
                {videos.map((video, index) => (
                    <li key={index}>
                        <video src={video} width="400" controls />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Admin;
