import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Container, Grid } from '@mui/material';
import ReactPlayer from 'react-player'; //
import { useIsMobile } from '../hooks/withIsMobile';
import CardWithIcon from '../components/CardWithIcon';
import { FOLDER_DATA } from '../constants/folderData';

const FolderDetail = () => {
  const location = useLocation();
  const { isMobile } = useIsMobile();
  const currentFolder = location.state?.currentFolder;

  console.log('isMobile', isMobile);
  return (
    <>
      <div className="flex-wrap w-full gap-5 header flex-left bg-white items-center p-4">
        <Link
          to="/"
          className="p-2.5 rounded-md hover:bg-theme-primary-300 text-theme-primary-300 hover:text-white"
        >
          <ArrowBackIosNewIcon className="" fontSize="medium" />
        </Link>
        <div className="flex items-center my-auto">
          <img
            src={currentFolder.thumbnail}
            alt={currentFolder.title}
            className="w-[200px] h-[110px] m-auto"
          />
          <div className="pt-2 pl-4 m-auto">
            <h1 className="text-2xl text-theme-primary-300 font-bold">
              {FOLDER_DATA.title}
            </h1>
            <p className="text-theme-primary-200">{FOLDER_DATA.description}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-theme-light w-[100%] xs:flex-row flex-center py-8 px-4 md:px-0">
        <div className="">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width={isMobile ? 270 : 600}
            height={isMobile ? 185 : 350}
          />
        </div>
        <div className="custom-input">
          <textarea
            name="notepad"
            cols="70"
            rows="8"
            placeholder="Type here to take notes..."
            className="block p-2.5 w-full text-sm text-theme-primary-300 bg-white rounded-md border border-theme-primary-200 focus:border-theme-primary-300 resize-none"
          ></textarea>
        </div>
      </div>

      <Container>
        <Box
          sx={{
            py: '30px',
          }}
        >
          <Grid sx={{ flexGrow: 1 }} container spacing={4}>
            {FOLDER_DATA.videos.map((folder, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4}>
                <CardWithIcon
                  id={index + 1}
                  folder={folder}
                  title={folder.title}
                  showActions={true}
                  showMedia={true}
                  isFolderCard={true}
                  cardRadius="5px"
                  contentPadding="24px"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default FolderDetail;
