import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { Divider } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function TrendingNow() {
  const classes = useStyles();

 const [msg,Setmsg]= useState('')

  const handleClick = (msg) => {
    Setmsg(msg)
  };
const data=[
'Chipotle(American restaurant specializing in mexical food) had #ChipotleLidFlip campaign that generated 250,000 submissions and 430 million views',
'Memes: Funny videos that describe some information: Tiktok is known to have large collection of memes.Compilation of TikTok memes gathers large views on youtube',
'influencer:Someone who has established social recognition and inspires or guides the actions of others.A tiktoker also may be an influencer',
'Silent generation:People born between 1925-2045, currrently at the age of 70-80.They are callled silent because they were raised during the period of war and depression',
'Baby boomers: people born between 1944-1964, currrently at the age of 56-76',
'Gen X: people born between 1965-1979, currrently at the age of 41-55',
'Gen Y: also called Millennials people born between  approx 1980-1994, currrently at the age of 23-38',
'Gen Z: people born between 1995-2015, currrently at the age of 5-25',
"cosplay:ractice of dressing up as a character from a film, book, or video game",
"twins: The trending hashtag #twins is huge, with 1.8 million posts and 9 billion views of videos featuring it.",
"Zach King:With 45 million followers on TikTok ,He is one of the most popular media entertainers. His famous digital magic tricks contribute to make him TikTok favorite, so much so that his TikTok account saw an increase of 15 million followers within just 10 months",
"Brittany Broski: She is a perfect example of an overnight TikTok influencer.Brittany’s comedic facial expressions became a staple meme on Instagram also.",
"#Dance:One of the frequent trends on tiktok.Short clip allowance allows non-dancers and dancers alike to rehearse the choreography beforehand and post their best take.",
"#Prank: prank tiktoks delivers good laugh and entertainment.Thousands have gained popularity among young generation wiwth this type of content",
"#Fitness and sports: Some form of Fitness include Crazy stunts, parkour, and high energy excercise. ",
"#Beauty:Beauty transformation and makeup tutorials have higher views on Tiktok ",
"(#Fashion):contrast to Instagram’s polished aesthetic many fashionistas take to TikTok to share behind the scenes hacks, tips, and tricks for getting the perfect outfit", 
"Effortless:While you might need great photography, editing, and sometimes even fashion skills to produce incredible pictures on Instagram, a TikTok video that took you a few minutes to produce might go viral and reach thousands (or even millions) of people."
]
  return (
    <div>
      <div>
          <h6>These are the trends and terms on tiktok currently popular.<br/>
          Click on the terms to know  more information about them.
          </h6>
      </div>
      <Divider/>
    <div className={classes.root}>
      <Chip label="#ChipotleLidFlip"   color="secondary"
      onClick={()=>handleClick(data[0])} />
      <Chip label="Disabled" disabled onClick={()=>handleClick('riyaz')} />
      <Chip avatar={<Avatar>R</Avatar>} label="memes" 
        color="primary"
        onClick={()=>handleClick(data[1])} />
      <Chip avatar={<Avatar alt="Natacha" />}
        label="Influencer"
        color="secondary"
        onClick={()=>handleClick(data[2])}
      />
      <Chip icon={<FaceIcon />} label="Silent Generation"
        onClick={()=>handleClick(data[3])}/>
      
      <Chip
        icon={<FaceIcon />}
        label=" Baby Boomers"
        onClick={()=>handleClick(data[4])}/>
      
      <Chip
        icon={<FaceIcon />}
        label="Gen X"
        onClick={()=>handleClick(data[5])} />
      <Chip
        icon={<FaceIcon />}
        label=" Gen Y"
        color="secondary"
        onClick={()=>handleClick(data[6])}    />
       <Chip
        icon={<FaceIcon />}
        label=" Gen Z"
        onClick={()=>handleClick(data[7])}    />
      <Chip
        label="cosplay"
        onClick={()=>handleClick(data[8])}
        deleteIcon={<DoneIcon />}
      />
      <Chip label="twins" onClick={()=>handleClick(data[9])}  />
      <Chip
        avatar={<Avatar>Z</Avatar>}
        label="Zach King"
        clickable
        color="primary"
        onClick={()=>handleClick(data[10])}
      />
      <Chip
        avatar={<Avatar>B</Avatar>}
        label="Brittany Broski"
        color="primary"
        onClick={()=>handleClick(data[11])}
      />
      <Chip
        avatar={<Avatar>D</Avatar>}
        label="#Dance"
        color="secondary"
        onClick={()=>handleClick(data[12])}
      />
      <Chip
        icon={<FaceIcon />}
        label="#Prank"
        onClick={()=>handleClick(data[13])}
        color="primary"
        deleteIcon={<DoneIcon />}
      />
      
      <Chip
        avatar={<Avatar>F</Avatar>}
        label="Fitness And Sports"
        color="secondary"
        onClick={()=>handleClick(data[14])}
      />
      <Chip label="#Beauty" 
      onClick={()=>handleClick(data[15])} 
      color="primary" />
      <Chip
        icon={<FaceIcon />}
        label="Fashion"
        color="secondary"
        onClick={()=>handleClick(data[16])}/>

        <Chip
        avatar={<Avatar>E</Avatar>}
        label="Efforless"
        color="primary"
        onClick={()=>handleClick(data[17])} />
      
      
    </div>
   
      <div>
        <Divider/>
        <hr/>
        {msg}
      </div>  
    </div>
  );
}
