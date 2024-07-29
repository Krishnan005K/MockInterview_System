import React, { useState } from 'react';
import VideoRoom from './components/VideoRoom';
const Meet = () => {
  const [roomId, setRoomId] = useState('');
  const [inRoom, setInRoom] = useState(false);

  const handleJoinRoom = () => {
    setInRoom(true);
  };

  return (
    <div>
      {!inRoom ? (
        <div>
          <input
            type="text"
            placeholder="Room ID"
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
          />
          <button onClick={handleJoinRoom}>Join Room</button>
        </div>
      ) : (
        <VideoRoom roomId={roomId} />
      )}
    </div>
  );
};

export default Meet;
