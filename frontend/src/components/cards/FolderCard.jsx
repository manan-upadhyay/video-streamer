import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Button, CardActions, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceHolder from '../../assets/images/folderBG.jpg';

const FolderCard = ({
  folder,
  title,
  icon,
  cardRadius = '10px',
  contentPadding,
  isFolderCard = false,
  showActions = false,
  showMedia = false,
  actionTitle = 'View',
}) => {
  const navigate = useNavigate();
  const imgUrl = folder?.thumbnail ?? PlaceHolder;

  const handleClick = () => {
    if (folder)
      navigate(`/${folder?._id}`, { state: { currentFolder: folder } });
  };

  return (
    <Card
      sx={{
        borderRadius: cardRadius,
      }}
      className={` ${
        isFolderCard
          ? 'shadow-sm hover:shadow-md cursor-pointer hover:border hover:border-theme-primary-200'
          : 'h-36 flex items-center justify-center shadow-sm hover:shadow-lg bg-primary'
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
      <Box>
        <CardContent
          sx={{ padding: contentPadding }}
          className="flex-col gap-3 text-center flex-center bg-primary"
        >
          <p
            className={`m-0 font-semibold
            ${isFolderCard ? 'text-primary-text text-sm ' : 'text-primary-text'}
            `}
          >
            {title}
          </p>
          {icon}
        </CardContent>
        {showActions && (
          <CardActions className="p-0 mt-3 flex-center">
            <Button
              disableTouchRipple
              className="px-4 leading-none capitalize text-primary flex-center bg-button-primary"
              size="small"
              onClick={handleClick}
            >
              <span>{actionTitle}</span>
              <KeyboardArrowRightIcon fontSize="small" />
            </Button>
          </CardActions>
        )}
      </Box>
    </Card>
  );
};
export default FolderCard;
