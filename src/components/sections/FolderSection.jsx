import { Container, Grid } from "@mui/material";
import React from "react";
import CardWithIcon from "../CardWithIcon";

const FolderSection = () => {
  return (
    <Container maxWidth="lg">
      <div className="card-section">
        <h1 className="pb-10 tracking-[1px]">Section Title</h1>
        <Grid sx={{ flexGrow: 1 }} container spacing={4}>
          <Grid item xs={2.4}>
            <CardWithIcon
              showActions={true}
              contentPadding="16px 14px 30px 14px"
              showMedia={true}
              cardRadius="0px"
              isFolderCard={true}
              title="This is a dummy text"
            />
          </Grid>
          <Grid item xs={2.4}>
            <CardWithIcon
              showActions={true}
              contentPadding="16px 14px 30px 14px"
              showMedia={true}
              cardRadius="0px"
              isFolderCard={true}
              title="This is a dummy text"
            />
          </Grid>
          <Grid item xs={2.4}>
            <CardWithIcon
              showActions={true}
              contentPadding="16px 14px 30px 14px"
              showMedia={true}
              cardRadius="0px"
              isFolderCard={true}
              title="This is a dummy text"
            />
          </Grid>
          <Grid item xs={2.4}>
            <CardWithIcon
              showActions={true}
              contentPadding="16px 14px 30px 14px"
              showMedia={true}
              cardRadius="0px"
              isFolderCard={true}
              title="This is a dummy text"
            />
          </Grid>
          <Grid item xs={2.4}>
            <CardWithIcon
              showActions={true}
              contentPadding="16px 14px 30px 14px"
              showMedia={true}
              cardRadius="0px"
              isFolderCard={true}
              title="This is a dummy text"
            />
          </Grid>
          <Grid item xs={2.4}>
            <CardWithIcon
              showActions={true}
              contentPadding="16px 14px 30px 14px"
              showMedia={true}
              cardRadius="0px"
              isFolderCard={true}
              title="This is a dummy text"
            />
          </Grid>
          <Grid item xs={2.4}>
            <CardWithIcon
              showActions={true}
              contentPadding="16px 14px 30px 14px"
              showMedia={true}
              cardRadius="0px"
              isFolderCard={true}
              title="This is a dummy text"
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default FolderSection;
