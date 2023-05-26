import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Divider,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { default as React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PlaceHolder from "../assets/images/folderBG.jpg";
import VideoPlayer from "../components/VideoPlayer";
import VideoCard from "../components/cards/VideoCard";
import { useIsMobile } from "../hooks/withIsMobile";
import { fetchVideos } from "../services";
import Header from "../common/Header";

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
			<Header />
			<div className='flex items-center w-full gap-5 p-4 header flex-left'>
				<Link
					to='/'
					className='p-2.5 rounded-md hover:bg-button-primary text-primary-text '
				>
					<ArrowBackIosNewIcon className='' fontSize='medium' />
				</Link>
				<div className='flex items-center justify-start my-auto'>
					<img
						src={currentFolder?.thumbnail ?? PlaceHolder}
						alt={currentFolder?.title}
						className='w-[20%] h-[10%] '
					/>
					<div className='pt-2 pl-4 '>
						<h1
							className={`${
								isMobile ? "text-xl" : "text-2xl"
							} text-2xl font-bold text-primary-text`}
						>
							{currentFolder?.title}
						</h1>
						<p
							className={`${
								isMobile ? "text-xs" : "text-lg"
							} text-secondary-text`}
						>
							{currentFolder?.description}
						</p>
					</div>
				</div>
			</div>

			<Divider sx={{ my: 3, mx: 4 }} />

			<Box className='py-8 bg-secondary text-primary-text max-w-[100%]'>
				<Container className='w-[100%] '>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={8} className=''>
							<VideoPlayer
								currentVideo={currentVideo}
								isMobile={isMobile}
							/>
						</Grid>

						<Grid item xs={12} sm={4}>
							<div className='h-full custom-input'>
								<TextField
									name='notepad'
									fullWidth
									placeholder='Type here to take notes...'
									multiline
									rows={13}
									maxRows={14}
								></TextField>
								<Typography className='flex mt-3 text-xs text-secondary-text'>
									* Notes are only intended to be stored
									temporarily. If you want your notes saved
									please enter them Asana. Contact Virgin
									Janitorial if you need help.
								</Typography>
							</div>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Divider sx={{ my: 3, mx: 4 }} />

			<Box className='py-8'>
				<Container>
					<Grid sx={{ flexGrow: 1 }} container spacing={4}>
						<Grid item xs={12} sm={12} lg={8}>
							<Grid sx={{ flexGrow: 1 }} container spacing={4}>
								{videos?.map((video, index) => (
									<Grid
										item
										xs={12}
										sm={6}
										md={4}
										key={index}
									>
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
						<Grid item xs={12} sm={12} lg={4}>
							<Card sx={{ minWidth: 275 }} className='bg-primary'>
								<CardContent>
									<Typography
										variant='h5'
										component='div'
										className='font-bold text-white'
									>
										Title
									</Typography>
									<Typography
										sx={{ mb: 3 }}
										className='text-white'
									>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry.
									</Typography>

									<Grid
										sx={{ flexGrow: 1 }}
										container
										spacing={3}
									>
										<Grid item xs={12} sm={6}>
											<Button
												variant='contained'
												className='w-full text-primary-text'
											>
												Download
											</Button>
										</Grid>
										<Grid item xs={12} sm={6}>
											<Button
												variant='contained'
												className='w-full text-primary-text'
											>
												Download
											</Button>
										</Grid>{" "}
									</Grid>
									<Grid className='mt-3'>
										<Typography className='flex text-xs'>
											<span>
												<p>
													* Please refer to your
													Training Manual for more
													File downloads and supported
													documents. Contact Virgin
													Janitorial if you need help
												</p>
											</span>
										</Typography>
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
