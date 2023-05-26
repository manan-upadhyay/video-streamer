import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button, CardActions, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import PlaceHolder from "../../assets/images/folderBG.jpg";

const VideoCard = ({ video, title, icon, setCurrentVideo, currentVideo }) => {
	const imgUrl = video?.thumbnail ?? PlaceHolder;

	return (
		<Card
			sx={{ borderRadius: "5px" }}
			className={` shadow-sm hover:shadow-md cursor-pointer hover:border hover:border-button-primary`}
		>
			{/* $
			{
				// currentVideo?._id === video?._id
				// 	? "border border-button-primary"
				// 	: ""
			} */}
			<div className='video-card-backdrop'>
				<CardMedia
					component='img'
					alt='green iguana'
					height='140'
					className='z-0'
					image={imgUrl}
				/>
				<CardContent
					sx={{ padding: "24px" }}
					className='flex-col gap-5 text-center flex-center'
				>
					{icon}
					<p className='m-0 text-sm font-semibold text-primary-text'>
						{title}
					</p>
				</CardContent>
				<CardActions className='p-0 py-3 flex-center'>
					<Button
						disableTouchRipple
						className='px-4 leading-none text-white capitalize flex-center bg-button-primary'
						size='small'
						onClick={() => {
							// setTimeout(() => {
							window.scrollTo({ top: 0, behavior: "smooth" });
							setCurrentVideo(video);
							// }, 3000);
						}}
					>
						<span>View</span>
						<KeyboardArrowRightIcon fontSize='small' />
					</Button>
				</CardActions>
			</div>
		</Card>
	);
};
export default VideoCard;
