import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions, CardMedia, Typography } from "@mui/material";
import image from "../assets/images/folderBG.avif";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CardWithIcon = ({
  icon,
  title,
  cardRadius = "2px",
  contentPadding,
  isFolderCard = false,
  showActions = false,
  showMedia = false,
}) => {
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
          image={image}
        />
      )}
      <CardContent
        sx={{ padding: contentPadding }}
        className="flex-center flex-col gap-5 text-center"
      >
        {icon}
        <Typography
          sx={
            isFolderCard
              ? {
                  "&.MuiTypography-root": {
                    color: "#293763",
                    fontSize: "14px",
                    fontWeight: 600,
                  },
                }
              : {
                  "&.MuiTypography-root": {
                    color: "#deaf14",
                  },
                }
          }
        >
          {title}
        </Typography>
      </CardContent>
      {showActions && (
        <CardActions className="btn">
          <Button
            sx={{
              "&.MuiButtonBase-root": {
                color: "white",
                lineHeight: 0,
              },
            }}
            className="flex-cente"
            size="small"
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
