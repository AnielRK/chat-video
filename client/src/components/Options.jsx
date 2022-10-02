import React, { useContext, useState } from 'react'
import { SocketContext } from '../SocketContent';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Options = ( { children } ) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
    <div className="flex justify-center items-center">
      <div className="flex m-auto flex-col border rounded p-2">
        <div className='flex flex-col sm:flex-row space-x-2 items-center'>
          <div className="flex flex-col">
            <h1 className='text-md'>Account Info</h1>
            <div className="flex flex-col">
              <input type="text" className='border' placeholder='Name' value={name} onChange={ (e) => setName(e.target.value)}/>
              <CopyToClipboard text={me} >
                <button className='bg-blue-500 rounded-md py-1 px-2 text-sm text-white w-28 m-1'>
                  copy your ID
                </button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className='text-md'>Make a call</h1>
            <input className='border' placeholder='Id to call' value={idToCall} onChange={ (e) => setIdToCall(e.target.value)} />
            {
              callAccepted && !callEnded ? (
                <button onClick={leaveCall} className='bg-red-500 rounded-md py-1 px-2 text-sm text-white m-1'>
                  Hang Up
                </button>
              ) : (
                <button onClick={() => callUser(idToCall)} className='bg-blue-500 rounded-md py-1 px-2 text-sm text-white w-28 m-1'>
                  Call
                </button>
              )
            }
          </div>
        </div>
        { children }
      </div>
    </div>
  )
}

export default Options