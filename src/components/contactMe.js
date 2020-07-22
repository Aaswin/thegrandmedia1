import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  root: {
    maxWidth:'97%',
  },
  media: {
    height: 140,
  },
});

export default function ContactMe() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
       <Grid item xs={12} sm={6}>
       <Card className={classes.root}>
       <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About us
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This website was created with the view to provide as much information about TikTok in easy manner.<br/>
            Various websites have been referenced while making this website.<br/>
             Any misinformation or inaccuracies are requested to be reported on the email link provided.<br/>
             Website is based on react js and design is based on :material ui design<a href='https://material-ui.com/' target=''>@material design</a><br/>
             Referenced sites:<br/>
             <a href='https://www.businessofapps.com/data/tik-tok-statistics/' target='blank'>@businessofapps
             </a><br/>
             <a href='https://en.wikipedia.org/wiki/List_of_most-followed_TikTok_accounts' target='blank'>@wikipedia
             </a><br/>
             <a href='https://influencermarketinghub.com/tiktok-tools-followers/' target='blank'>@influencermarketinghub
             </a><br/>
             <a href='https://mediakix.com/blog/most-popular-tiktok-hashtags-categories-topics/' target='blank'>@mediakix
             </a><br/>
             <a href='https://medium.com/@TheDFellow/a-content-creators-guide-to-tiktok-cdfd7c7d9951' target='blank'>@medium
             </a><br/>
             <a href='https://blog.hootsuite.com/tiktok-video-ideas/' target='blank'>@https://blog.hootsuite.com/tiktok-video-ideas/
             </a><br/>
          </Typography>
        </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card className={classes.root}>
      <CardActionArea>
        <MailIcon/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Contact 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The given email contact can be used to provide any suggestion.<br/>
            Any spam mail will be labeled as spam and trashed. <br/>
            You can contact me: arjundhakal961@gmail.com.<br/>
            The below link will open to new gmail site.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"  color="primary">
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=arjundhakal961@gmail.com&su=suggestion for your website' target='blank'>open gmail</a><br/>
        </Button>
      </CardActions>
    </Card>
        </Grid>
        </Grid>
    
    
    </div>
    
  );
}
