import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Loader from '../loader/index';

const VideoPlayer = ({ currentVideo, isMobile }) => {
  const [loading, setLoading] = useState(false);

  const handleReady = () => {
    setLoading(false);
  };

  const handleBuffer = () => {
    setLoading(true);
  };

  return (
    <>
      {loading || !currentVideo ? (
        <Loader />
      ) : (
        <ReactPlayer
          url={currentVideo?.link}
          width={isMobile ? 270 : 600}
          height={isMobile ? 185 : 350}
          onReady={handleReady}
          onBuffer={handleBuffer}
        />
      )}
    </>
  );
};

export default VideoPlayer;
