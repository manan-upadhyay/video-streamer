import React from 'react';

import { Container, Grid } from '@mui/material';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PieChartIcon from '@mui/icons-material/PieChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CardWithIcon from '../CardWithIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import NotesIcon from '@mui/icons-material/Notes';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FlagIcon from '@mui/icons-material/Flag';
import CalculateIcon from '@mui/icons-material/Calculate';

const CardSection = () => {
  return (
    <div className="bg-light">
      <Container maxWidth="lg">
        <div className="py-5">
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardWithIcon
                icon={
                  <SubscriptionsIcon
                    fontSize="large"
                    style={{ color: '#fff' }}
                    className="text-theme-primary-300"
                  />
                }
                title="100 ways to motivate yourself"
                showActions={true}
                contentPadding={'0'}
                actionTitle="Watch Videos"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardWithIcon
                icon={
                  <InboxIcon
                    style={{ color: '#fff' }}
                    fontSize="large"
                    className="text-theme-primary-300"
                  />
                }
                title="Your inbox"
                showActions={true}
                contentPadding={'0'}
                actionTitle="View Files"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardWithIcon
                icon={
                  <NotesIcon
                    style={{ color: '#fff' }}
                    fontSize="large"
                    className="text-theme-primary-300"
                  />
                }
                title="Your notes"
                showActions={true}
                contentPadding={'0'}
                actionTitle="View Notes"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardWithIcon
                icon={
                  <LocalMallIcon
                    style={{ color: '#fff' }}
                    fontSize="large"
                    className="text-theme-primary-300"
                  />
                }
                title="Free tools and resources"
                showActions={true}
                contentPadding={'0'}
                actionTitle="Downloads"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardWithIcon
                icon={
                  <FormatQuoteIcon
                    style={{ color: '#fff' }}
                    fontSize="large"
                    className="text-theme-primary-300"
                  />
                }
                title="Motivational quotes"
                showActions={true}
                contentPadding={'0'}
                actionTitle="View Quotes"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardWithIcon
                icon={
                  <EmojiEventsIcon
                    style={{ color: '#fff' }}
                    fontSize="large"
                    className="text-theme-primary-300"
                  />
                }
                title="Achievements"
                showActions={false}
                contentPadding={'0'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardWithIcon
                icon={
                  <FlagIcon
                    style={{ color: '#fff' }}
                    fontSize="large"
                    className="text-theme-primary-300"
                  />
                }
                title="Setting Goals"
                showActions={true}
                contentPadding={'0'}
                actionTitle="Download Goal Sheets"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardWithIcon
                icon={
                  <CalculateIcon
                    style={{ color: '#fff' }}
                    fontSize="large"
                    className="text-theme-primary-300"
                  />
                }
                title="Pricing Job Calculator"
                showActions={true}
                contentPadding={'0'}
                actionTitle="Download"
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default CardSection;
