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
import { default as React, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PlaceHolder from '../assets/images/folderBG.jpg';
import VideoPlayer from '../components/VideoPlayer';
import VideoCard from '../components/cards/VideoCard';
import { useIsMobile } from '../hooks/withIsMobile';
import { fetchVideos } from '../services';

const FolderDetail = () => {
  const location = useLocation();
  const { isMobile } = useIsMobile();
  const currentFolder = location.state?.currentFolder;

  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});

  useEffect(() => {
    const fetchVideosData = async () => {
      const response = await fetchVideos();
      setVideos(response?.videos);
    };
    if (videos?.length <= 0) {
      fetchVideosData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //set the first video as a current video
  useEffect(() => {
    setCurrentVideo(videos?.[0]);
  }, [videos]);

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
            src={currentFolder?.thumbnail ?? PlaceHolder}
            alt={currentFolder?.title}
            className="w-[200px] h-[110px] m-auto"
          />
          <div className="pt-2 pl-4 m-auto">
            <h1 className="text-2xl font-bold text-theme-primary-300">
              {currentFolder?.title}
            </h1>
            <p className="text-theme-primary-200">
              {currentFolder?.description}
            </p>
          </div>
        </div>
      </div>

      <Box className="bg-theme-light text-theme-primary-300 py-8">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={8}>
              <VideoPlayer currentVideo={currentVideo} isMobile={isMobile} />
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
                {videos?.map((video, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <VideoCard
                      id={video?.id}
                      video={video}
                      title={video?.title}
                      showActions={true}
                      showMedia={true}
                      setCurrentVideo={setCurrentVideo}
                      currentVideo={currentVideo}
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
