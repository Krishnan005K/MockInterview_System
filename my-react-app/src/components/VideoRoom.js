import React, { useEffect, useRef, useState } from 'react';
import SimplePeer from 'simple-peer';
import { firestore } from '../firebase';
import { collection, doc, onSnapshot, updateDoc, addDoc } from 'firebase/firestore';
import Video from './Video';

const VideoRoom = ({ roomId }) => {
  const [peers, setPeers] = useState([]);
  const userVideo = useRef();
  const peersRef = useRef([]);

  useEffect(() => {
    const roomRef = doc(firestore, 'rooms', roomId);
    const candidatesCollection = collection(firestore, 'rooms', roomId, 'candidates');

    // Get local media stream
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      userVideo.current.srcObject = stream;

      // Create a new peer for the local user
      const peer = createPeer(true, stream);

      // Listen for signaling changes from Firestore
      const unsubscribeRoom = onSnapshot(roomRef, snapshot => {
        const data = snapshot.data();
        if (data && data.offer) {
          // Handle incoming offer from another peer
          const incomingPeer = createPeer(false, stream);
          incomingPeer.signal(data.offer);

          incomingPeer.on('signal', answer => {
            updateDoc(roomRef, { answer });
          });

          // Listen for ICE candidates
          const unsubscribeCandidates = onSnapshot(candidatesCollection, snapshot => {
            snapshot.docChanges().forEach(change => {
              if (change.type === 'added') {
                const candidate = new RTCIceCandidate(change.doc.data());
                incomingPeer.addIceCandidate(candidate);
              }
            });
          });

          peersRef.current.push(incomingPeer);
          setPeers([...peersRef.current]);
        }
      });

      // Handle ICE candidates from the local peer
      peer.on('signal', offer => {
        updateDoc(roomRef, { offer });
      });

      peer.on('icecandidate', event => {
        if (event.candidate) {
          addDoc(candidatesCollection, event.candidate.toJSON());
        }
      });

      peersRef.current.push(peer);
      setPeers([...peersRef.current]);

      // Cleanup on component unmount
      return () => {
        unsubscribeRoom();
      };
    });
  }, [roomId]);

  function createPeer(initiator, stream) {
    return new SimplePeer({
      initiator,
      trickle: false,
      stream,
    });
  }

  return (
    <div>
      <video ref={userVideo} autoPlay playsInline />
      {peers.map((peer, index) => (
        <Video key={index} peer={peer} />
      ))}
    </div>
  );
};

export default VideoRoom;
