import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions, CardMedia } from "@mui/material";
import placeHolder from "../assets/images/folderBG.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const CardWithIcon = ({
  folder,
  title,
  icon,
  cardRadius = "2px",
  contentPadding,
  isFolderCard = false,
  showActions = false,
  showMedia = false,
}) => {
  const navigate = useNavigate();
  const imgUrl = folder?.thumbnail ?? placeHolder;

  const handleClick = () => {
    navigate(`/${folder?._id}`, { state: { currentFolder: folder } });
  };

  return (
    <Card
      sx={{
        borderRadius: cardRadius,
        background: isFolderCard ? "#fff" : "#353a4a",
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
        className="flex-col gap-5 text-center flex-center"
      >
        {icon}
        <p
          className={
            isFolderCard ? "text-theme text-sm font-semibold" : "text-yellow"
          }
        >
          {title}
        </p>
      </CardContent>
      {showActions && (
        <CardActions className="flex-center bg-theme">
          <Button
            disableTouchRipple
            className="leading-none text-white flex-center"
            size="small"
            onClick={handleClick}
          >
            <span>View</span>
            <KeyboardArrowRightIcon />
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
export default CardWithIcon;
