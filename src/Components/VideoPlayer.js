import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto mt-8">
      <div className="relative" style={{ paddingTop: '56.25%' }}>
        <iframe
          title="YouTube Video Player"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/h-gTSQ9LXes"
        //   frameBorder="0"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
