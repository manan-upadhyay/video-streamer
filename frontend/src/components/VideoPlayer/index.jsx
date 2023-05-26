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
        <div className="h-fit w-[100%]">
          <ReactPlayer
            url={currentVideo?.link}
            width="100%"
            light={currentVideo?.thumbnailUrl}
            // height={isMobile ? 185 : '100%'}
            onReady={handleReady}
            playing={false}
            controls
            onEnded={() => console.log('endeed')}
            // onBuffer={() => handleBuffer()}
          />
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
