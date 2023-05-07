import React from 'react';
import LoaderGif from '../../assets/images/loader.gif';

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={LoaderGif}
        alt="Loading..."
        className="animate-spin h-12 w-12"
      />
    </div>
  );
};

export default Loader;
