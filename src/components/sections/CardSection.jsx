import React from "react";

import { Container, Grid } from "@mui/material";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PieChartIcon from "@mui/icons-material/PieChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CardWithIcon from "../CardWithIcon";

const CardSection = () => {
  return (
    <div className="bg-blue-950">
      <Container maxWidth="lg">
        <div className="p-5">
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={3}>
              <CardWithIcon
                icon={
                  <SubscriptionsIcon
                    fontSize="large"
                    style={{ color: "#fff" }}
                  />
                }
                title="Title 1"
              />
            </Grid>
            <Grid item xs={3}>
              <CardWithIcon
                icon={
                  <PieChartIcon style={{ color: "#fff" }} fontSize="large" />
                }
                title="Title 2"
              />
            </Grid>
            <Grid item xs={3}>
              <CardWithIcon
                icon={
                  <FavoriteIcon style={{ color: "#fff" }} fontSize="large" />
                }
                title="Title 3"
              />
            </Grid>
            <Grid item xs={3}>
              <CardWithIcon
                icon={
                  <LocalMallIcon style={{ color: "#fff" }} fontSize="large" />
                }
                title="Title 4"
              />
            </Grid>
            <Grid item xs={3}>
              <CardWithIcon
                icon={
                  <FolderCopyIcon style={{ color: "#fff" }} fontSize="large" />
                }
                title="Title 5"
              />
            </Grid>
            <Grid item xs={3}>
              <CardWithIcon
                icon={
                  <FolderCopyIcon style={{ color: "#fff" }} fontSize="large" />
                }
                title="Title 6"
              />
            </Grid>
            <Grid item xs={3}>
              <CardWithIcon
                icon={
                  <FolderCopyIcon style={{ color: "#fff" }} fontSize="large" />
                }
                title="Title 7"
              />
            </Grid>
            <Grid item xs={3}>
              <CardWithIcon
                icon={
                  <FolderCopyIcon style={{ color: "#fff" }} fontSize="large" />
                }
                title="Title 8"
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default CardSection;
