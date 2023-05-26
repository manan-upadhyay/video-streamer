import React from "react";
import SliderCard from "../cards/SliderCard";
import { Grid } from "@mui/material";

const Slider = () => {
	const video = {
		thumbnail: "https://via.placeholder.com/600x400/ebebeb/969696?text=",
		title: "Noteworthy technology acquisitions 2021",
		subtitle:
			"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
	};

	return (
		<div className=''>
			<Grid
				sx={{ flexGrow: 1 }}
				container
				spacing={4}
				justifyContent={"center"}
			>
				<img
					src='https://picsum.photos/1440/400'
					alt=''
					className='object-cover w-full h-full py-8'
				/>
			</Grid>
		</div>
	);
};

export default Slider;
