import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ContentToCreate() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Educational Videos</Typography>
          <Typography className={classes.secondaryHeading}>Create informative videos </Typography>
        </AccordionSummary >
        <AccordionDetails>
          <Typography>
          TikTok has large young demographic which gets engaged in informative and educational videos.Though this platform has been knows as
          fun and musical content , there are enough example to prove that educational content also is highly regarded in this sector.
          You can share your medical expertise, bussiness ideas and knowledges , any informative discussion on any topics.
          Doctor Mamajones has got around 7 million views with contents  on health. Short videos of 30 sec or 15 sec can cover enough useful 
          information regarding any topic. Try to focus on similar topics on your videos. Interact with audience to get topic for your next video.
          Remember to be accurate and don't spread misinformation about things that you have heard. Misinfomation videos could be taken down and this 
          can hamper your profile as well.Provide references to trusted sources like wikipedia or news sites for further justification.
          <a href="https://www.tiktok.com/@mamadoctorjones/video/6846057083968687365?lang=en" taget="blank">Doctor Mamajones on TikTok</a> <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Festivals</Typography>
          <Typography className={classes.secondaryHeading}>
            Festivals and Social Occasions 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           TikTok has recently been used to aware people on different ocassions be it festivals or celebrations of novel peole.
           People and Societies post related content on occasions such as  #equal right,#BLM #children's day , #womenRights and many more.
           Create content in support of those movements and festivals. Provide information on why such days matter and why everyone should follow.
           Post in celebrations videos and even your views. Try always to be on right side to everything and don't support bad movements which hurt
           some other people. Participate in contests and social gathering if possible in support of those trending and share among followers. 
           You can also provide information how that movement stared or who the person we are celebrating and why.
           <a href="https://www.youtube.com/watch?v=J8VAXV0lLqE" taget="blank">Childrens day compilations</a> <br/>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Tutorials</Typography>
          <Typography className={classes.secondaryHeading}>
            Create tutorials of any skill
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         There are lots of tutorial contents that teach people to do some task.It can a makeup tutorial, a bike repair tutorials,
        You can show any activities that you are good at even if it is very obivious thing.
         Try to teach them better ways to do things or faster ways. You can show the best recipes you know. Tell people how
         you cook different recipes in your community. You can even teach young generation some basic skill they might be looking
         at their age. Try to make your content focused on either young generation or applicable to everyone.
         <a href="https://www.tiktok.com/@nnursema/video/6766982278854790406?lang=en" taget="blank">Tutorials tiktok</a> <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Current Events</Typography>
          <Typography className={classes.secondaryHeading}>
            Follow news events and other social platform.
          </Typography>
        </AccordionSummary>
        
        <AccordionDetails>
          <Typography>
            Any important world events can gather millions of views on any platform.Any pop culture or news
            event can be topic of discussion for TikTok audience. Follow news events closely everyday and find if they
            can be good content for your video today. Any tv/online shows that are treding can be used as reference to create videos.
            Acts can be imitated with similar looks of actress can be made with proper clothings as to relate more to them.
            <a href="https://www.tiktok.com/@diegomonico/video/6811328032289148165?lang=en" taget="blank">Tiktok concert</a> <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Viral Trends</Typography>
          <Typography className={classes.secondaryHeading}>
            Follow and act on viral trends asap.
          </Typography>
        </AccordionSummary>
        
        <AccordionDetails>
          <Typography>
         There are always some viral trends going on TikTok. Try to find the latest one and follow the trending or
         do the challenge. There are frequent challenges going among people outside the TikTok as well,bring the challenge to 
         TikTok and invite friends as well. You can contact an influencer already know on TikTok to accept those challenges<br/>.
         Here are few popular challenges and virals:<br/>
         <a href="https://www.tiktok.com/tag/fliptheswitchchallenge" taget="blank">TikTOk challenge</a> <br/>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Entertainment content</Typography>
          <Typography className={classes.secondaryHeading}>
            Sing, dance and act 
          </Typography>
        </AccordionSummary>
        
        <AccordionDetails>
          <Typography>
            Lots of actors,singers and dancers have been noticed on Tiktok ever since their content got viral. Practice well
            before your are ready to post.
            Take this kid from india as example who got uncountable opportunities  after his viral dance video.<br/>

            <a href="https://www.youtube.com/watch?v=ZD8UBDuhvzg" taget="blank">viral dancer youtube </a> <br/>
             You can sing a cover song, dance on latest movie songs and even act the scenes from
            movies you think people might like.
             Keep on creating such stuff until your content reaches desired
            no of viewers. Don't always look to become viral. Being steady and continious gets you more loyal followers.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <div>
      
    </div> 
    </div>
    
  );
}
