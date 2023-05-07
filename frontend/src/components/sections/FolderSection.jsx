import { Container, Grid } from '@mui/material';
import React from 'react';
import CardWithIcon from '../CardWithIcon';
// import image from "../assets/images/folderBG.avif";

const FolderSection = ({ section }) => {
  const { title, folders } = section;

  return (
    <Container maxWidth="lg">
      <div className="py-10 text-2xl sm:text-4xl">
        <h1 className="pb-10 tracking-[1px] font-bold text-theme-primary-300">
          {title}
        </h1>
        <Grid sx={{ flexGrow: 1 }} container spacing={4}>
          {folders?.length <= 0 ? (
            <h5 className="text-sm px-9">No Data to Show</h5>
          ) : (
            <>
              {folders?.map((folder) => (
                <Grid key={folder?._id} item xs={12} sm={6} md={4} lg={2.4}>
                  <CardWithIcon
                    folder={folder}
                    title={folder.title}
                    // showActions={true}
                    showMedia={true}
                    isFolderCard={true}
                    cardRadius="0px"
                    contentPadding="16px 14px 30px 14px"
                  />
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </div>
    </Container>
  );
};

export default FolderSection;
