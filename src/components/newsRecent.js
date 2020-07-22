import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '98%',
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function NewsRecent() {
  const classes = useStyles();
  function clickHandler(msg)
  {
    window.open(msg, "_blank");
  }
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button onClick={()=>{clickHandler('https://economictimes.indiatimes.com/tech/internet/facebook-to-shut-tiktok-clone-lasso/articleshow/76754531.cms')}}>
          <ListItemIcon>
            <InboxIcon color='secondary' />
          </ListItemIcon>
          <ListItemText  primary="Facebook to shut TikTok clone Lasso" />
         
        </ListItem>
        <Divider/>
        <ListItem button onClick={()=>{clickHandler('https://www.hindustantimes.com/world-news/us-probing-allegations-tiktok-violated-children-s-privacy-report/story-Ktb6iy7B8eXslUq8asdvSN.html')}}>
          <ListItemIcon>
            <InboxIcon color='secondary' />
          </ListItemIcon>
          <ListItemText  primary="US probing allegations TikTok violated children’s privacy" />
         
        </ListItem>
        <Divider/>
        
        <ListItem button onClick={()=>{clickHandler('https://www.independent.co.uk/life-style/gadgets-and-tech/news/tiktok-us-ban-democrats-republican-parties-staff-a9618081.html')}}>
          <ListItemIcon>
            <InboxIcon color='secondary' />
          </ListItemIcon>
          <ListItemText  primary="Democratic and Republican parties warn staff about TikTok use amid rumours of US ban" />
         
        </ListItem>
        <Divider/>
        
        <ListItem button onClick={()=>{clickHandler('https://www.news18.com/news/buzz/chingari-desi-alternative-to-tiktok-crosses-1-million-downloads-after-chinese-apps-ban-2693865.html')}}>
          <ListItemIcon>
            <InboxIcon color='secondary' />
          </ListItemIcon>
          <ListItemText  primary="Chingari, Desi Alternative to TikTok, Crosses 1 Million Downloads After Chinese Apps Ban" />
         
        </ListItem>
        <Divider/>
        
        <ListItem button onClick={()=>{clickHandler('https://www.news18.com/news/buzz/tiktok-among-59-chinese-apps-banned-what-is-in-store-for-your-existing-accounts-2693701.html')}}>
          <ListItemIcon>
            <InboxIcon color='secondary' />
          </ListItemIcon>
          <ListItemText  primary='TikTok Among 59 Chinese Apps Banned. What is in Store for Your Existing Accounts'/>
         
        </ListItem>
        <Divider/>
        
        <ListItem button onClick={()=>{clickHandler('https://www.news18.com/news/buzz/tiktok-is-here-to-stay-seven-reasons-why-indians-need-the-popular-video-app-in-their-lives-2116761.html')}}>
          <ListItemIcon>
            <InboxIcon color='secondary' />
          </ListItemIcon>
          <ListItemText  primary="Emotional Vent to Family Reunions: 7 Reasons Why Indians Need TikTok in their Lives" />
         
        </ListItem>
        <Divider/>
        
        <ListItem button onClick={()=>{clickHandler('https://gadgets.ndtv.com/apps/news/tiktok-banned-in-india-life-of-tiktokers-post-ban-2264016')}}>
          <ListItemIcon>
            <InboxIcon color='secondary' />
          </ListItemIcon>
          <ListItemText  primary="TikTok Banned in India: Here’s How Creators Have Been Dealing With It" />
         
        </ListItem>
        <Divider/>
        
        <ListItem button onClick={()=>{clickHandler('https://www.bbc.com/news/business-53358669?intlink_from_url=https://www.bbc.com/news/topics/c255806071xt/tiktok&link_location=live-reporting-story')}}>
          <ListItemIcon>
            <InboxIcon color='secondary' />
          </ListItemIcon>
          <ListItemText  primary="TikTok halts Hong Kong access after security law" />
         
        </ListItem>
        <Divider/>
        
        <ListItem button onClick={()=>{clickHandler('https://www.bbc.com/news/technology-53436774?intlink_from_url=https://www.bbc.com/news/topics/c255806071xt/tiktok&link_location=live-reporting-story')}}>
          <ListItemIcon>
            <InboxIcon color='secondary' />
          </ListItemIcon>
          <ListItemText  primary="TikTok deletes 29,000 coronavirus clips" />
         
        </ListItem>
        <Divider/>
        
        <ListItem button onClick={()=>{clickHandler('https://www.bbc.com/news/business-53370736?intlink_from_url=https://www.bbc.com/news/topics/c255806071xt/tiktok&link_location=live-reporting-story')}}>
          <ListItemIcon>
            <InboxIcon color='secondary' />
          </ListItemIcon>
          <ListItemText  primary="TikTok: Amazon says email asking staff to remove app 'sent in error'" />
         
        </ListItem>
        <Divider/>
      </List>
            
    </div>
  );
}
