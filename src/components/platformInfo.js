import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import LaptopMacIcon from '@material-ui/icons/LaptopMac';

import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import WbSunnySharpIcon from '@material-ui/icons/WbSunnySharp';
import PublicSharpIcon from '@material-ui/icons/PublicSharp';
import MusicNoteSharpIcon from '@material-ui/icons/MusicNoteSharp';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '3px 3px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function PlatformInfo() {
  const classes = useStyles();

  return (
    <div>
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          Begining:
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary'>
            <MusicNoteSharpIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              First launch:
            </Typography>
            <Typography>TikTok was first launched in 2017 outside of China(most countries).<br/>
            It became available worldwidely popular after it merged with Musical.ly on 2018,August.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
           The company behind:
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              ByteDance:
            </Typography>
            <Typography>TikTokvideo-sharing social networking service  owned by ByteDance,<br/>
              ByteDance is Beijing-based internet technology company founded in 2012 by Zhang Yiming(worth $9B).<br/>
              Since June 2020, Kevin Mayer is CEO of TikTok and COO of parent company ByteDance.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <PublicSharpIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Statistics:
            </Typography>
            <Typography>Total TikTok downloads over 1.5 billion- making it the seventh-most downloaded app.<br/>
            It is estimated that 57% of the TikTok/Douyin userbase is based in China.<br/>
            Android TikTok users spent 68 billion hours using the app in 2019.<br/>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h3">
              More :
            </Typography>
            <Typography>TikTok is available in over 150 markets around the world, in 39 languages. <br/>
            There are 800 million TikTok users around the world (monthly active users).<br/>
            It is the  sixth-most used social app in the world.<br/>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <WbSunnySharpIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Demographics of TikTok: 
            </Typography>
            <Typography>60% of US TikTok users are aged between 16-24, according to a  2019 report from Reuters.<br/>
            30% of US TikTok users report household income of $40,000 or less.<br/>
            TikTok users far outnumber male in the US, by a ratio or nearly 2:1.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    <div>
      <Paper elevation={3} >
      <strong>Thing to care about</strong><br/>
      When first downloading the app, the user's account is public by default.<br/>
      TikTok allows users to change to private in their settings.<br/> 
      Private content remains visible to TikTok but blocked to users not authorized.<br/>
      Users are also allowed to report accounts (spam or inappropriate)<br/>
      New feature "family safety mode" announced in 2020 allows parents to control children's digital well being.<br/>
      There is a screen time management option, restricted mode, and can put a limit on direct messages.<br/>
       

      </Paper>
    </div>  
  
  </div>
  );
}
