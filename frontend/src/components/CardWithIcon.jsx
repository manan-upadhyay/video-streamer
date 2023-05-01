import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, CardMedia } from '@mui/material';
import image from '../assets/images/folderBG.avif';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

const CardWithIcon = ({
  id,
  folder,
  title,
  icon,
  cardRadius = '10px',
  contentPadding,
  isFolderCard = false,
  showActions = false,
  showMedia = false,
}) => {
  const navigate = useNavigate();
  const imgUrl = folder?.thumbnail;
  console.log('imgUrl', imgUrl);
  const handleClick = () => {
    if (id) navigate(`/${id}`, { state: { currentFolder: folder } });
  };

  return (
    <Card
      sx={{
        borderRadius: cardRadius,
      }}
      className={` ${
        isFolderCard
          ? 'shadow-sm hover:shadow-md cursor-pointer hover:border hover:border-theme-primary-200'
          : 'h-36 flex items-center justify-center shadow-sm hover:shadow-lg bg-theme-light'
      }`}
      onClick={() => {
        if (handleClick) {
          handleClick();
        }
      }}
    >
      {showMedia && (
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={imgUrl}
        />
      )}
      <CardContent
        sx={{ padding: contentPadding }}
        className="flex-center flex-col gap-5 text-center"
      >
        {icon}
        <p
          className={`m-0
            ${
              isFolderCard
                ? 'text-theme-primary-200 text-sm font-semibold'
                : 'text-theme-primary-300'
            }
          `}
        >
          {title}
        </p>
      </CardContent>
      {/* {showActions && (
        <CardActions className="flex-center bg-theme">
          <Button
            disableTouchRipple
            className="flex-center text-white leading-none"
            size="small"
          >
            <span>View</span>
            <KeyboardArrowRightIcon />
          </Button>
        </CardActions>
      )} */}
    </Card>
  );
};
export default CardWithIcon;
