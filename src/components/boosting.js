import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import InstagramIcon from '@material-ui/icons/Instagram';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import UpdateIcon from '@material-ui/icons/Update';
import Button from '@material-ui/core/Button';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    display: 'flex',
    height: '82%',
  },
  tabs: {
    borderRight:'red',
    backgroundColor:'#3F51B5 ',
    
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab  icon={<LocalOfferIcon  />}  label="#Hashtags" {...a11yProps(0)} />
        <Tab  icon={<AccountCircleIcon />} label="Profile" {...a11yProps(1)} />
        <Tab  icon={<VideoLibraryIcon />} label="Media" {...a11yProps(2)} />
        <Tab  icon={<UpdateIcon />}  label="Update" {...a11yProps(3)} />
        <Tab  icon={<InstagramIcon />} label="Platforms" {...a11yProps(4)} />
        <Tab  icon={<SupervisedUserCircleIcon />} label="Collaborations" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box><Button color="primary">Use #Hashtags</Button></Box>
        Hashtags represent the trending type content on TikTok.<br/>
         Try to make video related to current trending #Hastags and tag your video. <br/>
         Also do care about the type of audience that follows you and relate the content.<br/>
         If hastags don't go along with your audience then drop the idea.
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box  color="primary"><Button color="primary">Maintain good Profile</Button></Box>
      Provide proper and clear information on your profile.<br/>
        Your profile details should be about the type of content you make.<br/>
        Any new audience should be able to  understand info and follow.<br/>
        Make the language simpler as TikTok has audience from wide range of countries.<br/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box> <Button color="primary">Quality Video and Audio</Button></Box>
      Try to make high quality videos by using proper cameras and other equipments.<br/>
      Soundtrack make the videos more attractive and effective.<br/>
      Choose the best sound that mathes with your video and its motive<br/>
      Follow the trend but dont act the same style. Try to stand out with original videos.<br/>
      Post about important topics in creative way.<br/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box> <Button color="primary">Update Regularly</Button></Box>
      The more content you have , the more followers you are likely to have<br/>
       Try to make the content at least daily or even twice/thrice .<br/>
       You can prepare the videos beforehand and release them later as well<br/>
       Interact daily with the followers by replying their comments if possible.<br/>
       Follow them back or encourage your followers by liking and commneting their videos as well<br/>
        Never comprimise in the quality of content you make<br/>
        Its better to have one high quality than two bad vidoes<br/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box><Button color="primary">Share your creation on platforms</Button></Box>
      Share the video you make on other platform:Facebook,Twitter,Insatgram<br/>
        You might get new followers from those platform if they are not TikTok already<br/> 
        Its good idea to promote the trailer for your videos on other platfrom as well<br/>
        Sharing trailer brings back the viewers back to your video which increases the like.<br/> 
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box><Button color="primary">Connect with other creaters</Button></Box>
      Collaborations with other TikTokers makes you get notice by their followers.<br/>
        Choose Tiktokers who have common style or your content relates to their<br/>
        Choose duet type video  or act together for some video to make Collaborations<br/>
      </TabPanel>
     
    </div>
  );
}
