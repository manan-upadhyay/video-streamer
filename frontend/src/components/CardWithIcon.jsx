import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Button, CardActions, CardMedia } from '@mui/material';
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
  actionTitle = 'View',
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
      <Box>
        <CardContent
          sx={{ padding: contentPadding }}
          className="flex-center flex-col gap-3 text-center"
        >
          <p
            className={`m-0 font-semibold
            ${
              isFolderCard
                ? 'text-theme-primary-200 text-sm'
                : 'text-theme-primary-300'
            }
            `}
          >
            {title}
          </p>
          {icon}
        </CardContent>
        {showActions && (
          <CardActions className="flex-center mt-3 p-0">
            <Button
              disableTouchRipple
              className="flex-center bg-theme-primary-300 text-white leading-none px-4 capitalize"
              size="small"
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
export default CardWithIcon;
