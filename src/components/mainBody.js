import React , { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PopularFigures from './popularFigures';
import StepsToStart from './getStart';
import ContentToCreate from './contentToCreate';
import Alternatives from './alternatives';
import TrendingNow from './trendingNow';
import BoostingIdeas from './boosting';
import NewsRecent from './newsRecent';
import ContactMe from './contactMe';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import PlatformInfo from './platformInfo';
import HomeIcon from '@material-ui/icons/Home';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import TrendingUpSharpIcon from '@material-ui/icons/TrendingUpSharp';
import LocalLibrarySharpIcon from '@material-ui/icons/LocalLibrarySharp';
import OfflineBoltSharpIcon from '@material-ui/icons/OfflineBoltSharp';
import HttpSharpIcon from '@material-ui/icons/HttpSharp';
import ContactMailSharpIcon from '@material-ui/icons/ContactMailSharp';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import MusicVideoSharpIcon from '@material-ui/icons/MusicVideoSharp';
import SupportMe from './supportMe';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow:'1',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 0),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function MainBody() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [compindex,setCompindex] = useState(0 );
  const mystyle={
    display: 'flex',
  direction: 'column'
  };

  const compLists=[
    <StepsToStart/>,
    <PlatformInfo/>,
    <Alternatives/>,
    <ContentToCreate/>,
    <PopularFigures/>,
    <TrendingNow/>,
    <BoostingIdeas/>,
    <NewsRecent/>,
    <ContactMe/>,
  <SupportMe/>];
  const compTitles=[
    'Guide to how to start',
    'Details about platform and history',
    'Comparision with similar app',
    'Content to create ',
    "Recognized people on this platform",
    'Trends and Terms for TikTok users',
    'How to make appropriate content',
    'News coverage regarding this media',
    'Help us with your valuable suggestions and queries ',
    'Support us to grow with as much as you can' ]

    
  function handleClick(index,title)
  {

   setCompindex(index); 
   
  }
  function handleClickButtonNext(index)
  {
   setCompindex(compindex+1); 
   
  }
  function handleClickButtonPrev(index)
  {
   setCompindex(compindex-1); 
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
         <box>

         </box>
         <MusicVideoSharpIcon />

          <Typography variant="h6" noWrap>    
            {compTitles[compindex]}
           
            </Typography >
        
 
        </Toolbar>
      
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="How To Start" onClick={()=>handleClick(0)}>
          <ListItemIcon> <HomeIcon color="primary" /></ListItemIcon>
          <ListItemText primary  ="How to Start" />
          </ListItem>
          
          <ListItem button key="Platform Details" onClick={()=>handleClick(1)}>
          <ListItemIcon> <InfoSharpIcon  color='secondary'   /></ListItemIcon>
          <ListItemText primary  ="Platform Details" />
          </ListItem>
          <ListItem button key="Other Similar Choices" onClick={()=>handleClick(2)}>
          <ListItemIcon> <CardTravelIcon color='secondary' /></ListItemIcon>
          <ListItemText primary  ="Similar Apps" />
          </ListItem>

          <ListItem button key="Content Ideas"  onClick={()=>handleClick(3)}>
          <ListItemIcon> <LocalLibrarySharpIcon  color='secondary'  /></ListItemIcon>
          <ListItemText primary="Content Ideas" />
          </ListItem>
          <ListItem button key="Popular Figures"  onClick={()=>handleClick(4)}>
          <ListItemIcon> <WhatshotSharpIcon color='secondary' /></ListItemIcon>
          <ListItemText primary="Popular Figures" />
          </ListItem>
          <ListItem button key="Trends & Terms"  onClick={()=>handleClick(5)}>
          <ListItemIcon> <TrendingUpSharpIcon  color='secondary' /></ListItemIcon>
          <ListItemText primary="Trending Now" />
          </ListItem>
          <ListItem button key="Boost Your Market"  onClick={()=>handleClick(6)}>
          <ListItemIcon> <OfflineBoltSharpIcon  color='secondary'  /></ListItemIcon>
          <ListItemText primary="Boost Your Market" />
          </ListItem>
          <ListItem button key="In The News"  onClick={()=>handleClick(7)}>
          <ListItemIcon> <HttpSharpIcon  color='secondary'  /></ListItemIcon>
          <ListItemText primary="In The News" />
          </ListItem>
         
        </List>
        <Divider />
        <ListItem button key="Contact Us" onClick={()=>handleClick(8)}>
            <ListItemIcon> <ContactMailSharpIcon  color='primary' /></ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItem>
        <ListItem button key="Support Us" onClick={()=>handleClick(9)}>
            <ListItemIcon> <LocalCafeIcon  color='primary' /></ListItemIcon>
            <ListItemText primary="Support Us" />
          </ListItem>
          


        
      </Drawer>
      <main
        className={clsx(classes.content, {
          
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader}  
        style={mystyle}  />

        {compLists[compindex] }
        <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-end">
          <Grid item xs={2} >
            <Button
            disabled={compindex<1}
            onClick={()=>handleClickButtonPrev()}
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<NavigateBeforeIcon />}>
            Previous
          </Button>  
          </Grid>
          <Grid item xs={4} >
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={2} >
            <Paper className={classes.paper}></Paper>
          </Grid>
          
          <Grid item xs={1} >
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid  item xs={3}>
            
          <Button
          align='right'
          variant="contained"
          color="primary"
          disabled={compindex>8}
          className={classes.button}
          endIcon={<ArrowForwardIosIcon />}
          onClick={()=>handleClickButtonNext()}>
          next
        </Button>  
          </Grid>
              
          
       </Grid>
        
     
      
      </main>
    </div>
  );
}
