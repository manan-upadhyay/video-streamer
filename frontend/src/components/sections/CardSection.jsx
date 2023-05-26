import CalculateIcon from "@mui/icons-material/Calculate";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FlagIcon from "@mui/icons-material/Flag";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import NotesIcon from "@mui/icons-material/Notes";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { Container, Grid } from "@mui/material";
import React from "react";
import FolderCard from "../cards/FolderCard";

const CardSection = () => {
	return (
		<div className=''>
			<Container maxWidth='lg'>
				<div className='py-5'>
					<Grid sx={{ flexGrow: 1 }} container spacing={2}>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<FolderCard
								icon={
									<SubscriptionsIcon
										fontSize='large'
										style={{ color: "#fff" }}
										className='text-primary-text'
									/>
								}
								title='100 ways to motivate yourself'
								showActions={true}
								contentPadding={"0"}
								actionTitle='Watch Videos'
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<FolderCard
								icon={
									<LocalMallIcon
										style={{ color: "#fff" }}
										fontSize='large'
										className='text-primary-text'
									/>
								}
								title='Free tools and resources'
								showActions={true}
								contentPadding={"0"}
								actionTitle='Downloads'
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<FolderCard
								icon={
									<FlagIcon
										style={{ color: "#fff" }}
										fontSize='large'
										className='text-primary-text'
									/>
								}
								title='Setting Goals'
								showActions={true}
								contentPadding={"0"}
								actionTitle='Download Goal Sheets'
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<FolderCard
								icon={
									<CalculateIcon
										style={{ color: "#fff" }}
										fontSize='large'
										className='text-primary-text'
									/>
								}
								title='Pricing Job Calculator'
								showActions={true}
								contentPadding={"0"}
								actionTitle='Download'
							/>
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	);
};

export default CardSection;
