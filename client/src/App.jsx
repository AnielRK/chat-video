import React from 'react';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const App = () => {
  return (
    <>
      <Header/>
      <div className="px-16">
        <VideoPlayer/>
        <Options>
          <Notifications/>
        </Options>
      </div>
    </>
  )
}

export default App