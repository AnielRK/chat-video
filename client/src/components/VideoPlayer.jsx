import React from 'react'
import { useContext } from 'react';
import { SocketContext } from "../SocketContent";

const VideoPlayer = () => {
  
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className='flex flex-col sm:flex-row justify-center space-x-1'>
      {
        stream && (
          <div className="my-2 p-2 border rounded-md ">
            <h1 className="text-xl">{name || 'Name'}</h1>
            <video playsInline  muted ref={myVideo} autoPlay className='rounded-sm w-[300px] md:w-[500px]'/>
          </div>
        )
      }
      {
        callAccepted && !callEnded && (
          <div className="my-2 p-2 border rounded-md">
            <h1 className="text-xl"> { call.name || 'Name'} </h1>
            <video playsInline ref={userVideo} autoPlay className=' rounded w-[300px] md:w-[500px]'/>
          </div>
        )
      }
    </div>
  )
}

export default VideoPlayer