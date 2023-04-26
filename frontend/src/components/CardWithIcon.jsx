import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions, CardMedia } from "@mui/material";
import image from "../assets/images/folderBG.avif";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const CardWithIcon = ({
  id,
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
  const imgUrl = folder?.thumbnail;
  console.log("imgUrl", imgUrl);
  const handleClick = () => {
    navigate(`/${id}`, { state: { currentFolder: folder } });
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
        className="flex-center flex-col gap-5 text-center"
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
            className="flex-center text-white leading-none"
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
