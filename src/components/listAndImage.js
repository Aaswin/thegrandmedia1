import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import signuptk from '../assets/signuptk.png'
import signwithNo from '../assets/signwithNo.png'
import downloadBut from '../assets/download.jpg'
import feed from '../assets/feed.webp';
import heart from '../assets/heart.jpg';
import profile from '../assets/profile.jpg';
import notify from '../assets/notify.jpg';
import create from '../assets/create.jpg'
import filter from '../assets/filter.jpg'
import discover from '../assets/discover.jpg'
import effect from '../assets/effect.png'
import CardMedia from '@material-ui/core/CardMedia';

import post from '../assets/post.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'skyblue'
  },
  inline: {
    display: 'inline',
    marginLeft:'0px'
   
    
  },
}));

export  function ListAndImage1(props) {
    const classes = useStyles();
  
    return (
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={downloadBut} />
          </ListItemAvatar>
          <ListItemText
            primary="Download "
            secondary={
              <React.Fragment>
                              <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  From playstore(andorid) or app store(for ios) or from amazon store download the app.<br/>
                <a href="https://play.google.com/store?hl=en" target='blank'>Playstore link</a><br/>
                  <a href="https://www.apple.com/ios/app-store/" target='blank'>App store link</a><br/>
                  If the TikTok is not available in the playstore find the apk here:<br/>
                  <a href='https://apkpure.com/tiktok/com.ss.android.ugc.trill' target='blank'>TikTok .apk link</a>
                </Typography>
                </React.Fragment>
                
               
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          
                
                <img src={signuptk} 
                  width='200'  max-Width='100'/>
                
          <ListItemText
            primary="Sign up"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  
                  className={classes.inline}
                  color="textPrimary">
                Tap the profile icon in the bottom-right corner of the screen.<br/>
                Click on sign up. <br/>
                Sign up with  Google, Facebook,Instagram ,Twitter,email address<br/>
            
                </Typography>
               
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          
          <img src={signwithNo}  width='200'  max-Width='100px'/>
          
          <ListItemText
            primary="sign up manually"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  For phone sign up you will need to input your birthday. <br/>
                    And phone number or email address and set a password. <br/>
                    After verifying that you're not a robot and you are ready to go.<br/>
                </Typography>
               
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    );
  }
  export  function ListAndImage2(props) {
    const classes = useStyles();
    return (
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
                    <img src={feed}  width='200'  max-Width='100px'/>
          
          <ListItemText
            primary="For You"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                 This feed is will be random at begining.<br/>
                 It will be filled with your preferred videos when you like and interact with other videos.<br/>
                    Tiktok uses machine learning algorithms to find the best videos for you. <br/>
                </Typography>
               
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          
            <Avatar alt="discover" src={discover} />
          
          <ListItemText
            primary="Discover"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Discover  tab is used to find content and See what hashtags are trending.<br/>
                  And you can search anything.<br/>
                  Most of the ways you can interact with a video are on the right side of the screen.
                </Typography>
               
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          
            <Avatar alt="heart" src={heart} />
          
          <ListItemText
            primary="heart/double tap"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary">
                 Like the video,you can double-tap as well.<br/>
                 Long-press the screen and you can save a video.
                 

                </Typography>
               
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          
            <img  src={profile} width='200'  max-Width='100'/>
          
          <ListItemText
            primary="the creator profile"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                By swiping left, access the creator profile<br/>
                You can follow the creater and find all his contents there.
                </Typography>
               
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
                  <img src={notify} width='200'  max-Width='100'/>
           
         
          <ListItemText
            primary="Notifications tab"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                 Comments from your followers in will appear here<br/>
                 This is also inbox for private-message from followers 
                </Typography>
               
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    );
  }
  

  export  function ListAndImage3(props) {
    const classes = useStyles();
  
    return (
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          
          <img src={create}  width='200'  max-Width='100'/>
                    <ListItemText
            primary="Create button"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary">
                 Tap the White Button to  upload the video you want.<br/>
                 Tap Select Sound in the top right.<br/>
                 Use the Mixer tool or Trim to get the song just how you want it <br/>
                </Typography>
              
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <img src={filter} width='200'  max-Width='100'/>
          <ListItemText
            primary="Filter Options"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Tapping the three-colored icon willl  apply basic filters.<br/>
                  Other options incluce smiley faces and emojis.  <br/>
                  There is otption to apply filer on sound as well.
                </Typography>
               
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <img src={effect} width='200'  max-Width='100'/>
          <ListItemText
            primary=" Effects"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                 Apply visual filters over your video like  Water,Snow,Rainbow etc.<br/>
                 Long-press on a filter to apply it and let go to stop. <br/>
                 There is an option to apply various sound effect as well.
                </Typography>
                
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <img src={post} width='200'  max-Width='100'/>
          <ListItemText
            primary=" Finished"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary">
                
                After creating the video tap the Next button(red button in the corner)
                 It will take you to the Post page.  <br/>
                 Long-press on a filter to apply it and let go to stop. <br/>
                 You have completed all the steps.
                 
                </Typography>
                
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      
    );
  }
  
  
