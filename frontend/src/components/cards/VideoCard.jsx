import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button, CardActions, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import PlaceHolder from '../../assets/images/folderBG.jpg';

const VideoCard = ({ video, title, icon, setCurrentVideo, currentVideo }) => {
  const imgUrl = video?.thumbnail ?? PlaceHolder;

  return (
    <Card
      sx={{ borderRadius: '5px' }}
      className={`${
        currentVideo?._id === video?._id
          ? 'border border-theme-primary-200'
          : ''
      } shadow-sm hover:shadow-md cursor-pointer hover:border hover:border-theme-primary-200`}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imgUrl}
      />
      <CardContent
        sx={{ padding: '24px' }}
        className="flex-col gap-5 text-center flex-center"
      >
        {icon}
        <p className="m-0 text-theme-primary-200 text-sm font-semibold">
          {title}
        </p>
      </CardContent>
      <CardActions className="flex-center my-3 p-0">
        <Button
          disableTouchRipple
          className="flex-center bg-theme-primary-300 text-white leading-none px-4 capitalize"
          size="small"
          onClick={() => {
            setTimeout(() => {
              setCurrentVideo(video);
            }, 3000);
          }}
        >
          <span>View</span>
          <KeyboardArrowRightIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
};
export default VideoCard;
