import React from 'react';

const SliderCard = (props) => {
  const { style, video, className } = props;

  return (
    <div
      className={`md:max-w-[300px] bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg m-auto ${className}`}
      style={{ ...style }}
    >
      <a href="#">
        <img className="rounded-t-lg" src={video.thumbnail} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-theme-dark-200">
            {video.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-theme-dark-100">{video.subtitle}</p>
      </div>
    </div>
  );
};

export default SliderCard;
