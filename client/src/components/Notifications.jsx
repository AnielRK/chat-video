import React, { useContext } from 'react';

import { SocketContext } from '../SocketContent';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div className=''>
          <h1>{call.name} is calling:</h1>
          <button onClick={answerCall} className='bg-green-400 rounded p-1 text-md text-white'>
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;