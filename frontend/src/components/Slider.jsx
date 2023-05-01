import React from 'react';
import SliderCard from './SliderCard';
import { Grid } from '@mui/material';

const Slider = () => {
  const video = {
    thumbnail: 'https://via.placeholder.com/600x400/ebebeb/969696?text=',
    title: 'Noteworthy technology acquisitions 2021',
    subtitle:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  };

  return (
    <div className="slider">
      <Grid
        sx={{ flexGrow: 1 }}
        container
        spacing={4}
        justifyContent={'center'}
      >
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <SliderCard video={video} className={`scale-95 `} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <SliderCard video={video} className={``} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <SliderCard video={video} className={`scale-95 `} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Slider;
