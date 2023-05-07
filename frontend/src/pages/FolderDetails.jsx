import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
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

      <Box className="bg-theme-light text-theme-primary-300 py-8">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={8}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                // width={isMobile ? 270 : 600}
                // height={isMobile ? 185 : 350}
                width={'100%'}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <div className="custom-input h-full">
                <textarea
                  name="notepad"
                  placeholder="Type here to take notes..."
                  className=""
                ></textarea>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="py-8">
        <Container>
          <Grid sx={{ flexGrow: 1 }} container spacing={4}>
            <Grid item xs={12} sm={8}>
              <Grid sx={{ flexGrow: 1 }} container spacing={4}>
                {FOLDER_DATA.videos.map((folder, index) => (
                  <Grid item xs={12} sm={6} md={4}>
                    <CardWithIcon
                      id={index + 1}
                      folder={folder}
                      title={folder.title}
                      showMedia={true}
                      isFolderCard={true}
                      cardRadius="5px"
                      contentPadding="24px"
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ minWidth: 275 }} className="bg-theme-primary-200">
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    className="text-white font-bold"
                  >
                    Title
                  </Typography>
                  <Typography sx={{ mb: 3 }} className="text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Typography>

                  <Grid sx={{ flexGrow: 1 }} container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="contained"
                        className="bg-theme-light text-theme-primary-300 w-full"
                      >
                        Contained
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="contained"
                        className="bg-theme-light text-theme-primary-300 w-full"
                      >
                        Contained
                      </Button>
                    </Grid>{' '}
                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="contained"
                        className="bg-theme-light text-theme-primary-300 w-full"
                      >
                        Contained
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="contained"
                        className="bg-theme-light text-theme-primary-300 w-full"
                      >
                        Contained
                      </Button>
                    </Grid>{' '}
                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="contained"
                        className="bg-theme-light text-theme-primary-300 w-full"
                      >
                        Contained
                      </Button>
                    </Grid>{' '}
                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="contained"
                        className="bg-theme-light text-theme-primary-300 w-full"
                      >
                        Contained
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FolderDetail;
