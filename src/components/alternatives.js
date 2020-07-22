import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import{makeStyles} from '@material-ui/core/styles';
import { Divider, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => (
    {
        root: {
            flexGrow: 1
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
           
        }
    }
));


export default function Alternatives()
{
    const classes = useStyles();
    return (
        <div className="container">
            <Grid container
                spacing={1}>
                
                <Grid item xs={12} sm={6}>
                    <Card className={
                        classes.root}  style={{backgroundColor:'#FF8C5A'}}>
                        <CardActionArea>
                            <CardContent>
                            <div  style={{ backgroundColor: "" }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Likee Lite
                                </Typography>
                                <Divider/>
                                </div>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    <strong>Downloads: </strong>50,000,000+<br/> 
                                    <strong>Ratings: </strong> 4.0<br/>
                                    <strong>Company valuation: </strong>40+B"<br/>
                                    <strong>Based in: </strong>Singapore based Chinesese company<br/>
                                    <strong>Uses: </strong> Create professional videos with the help of our unique auto-editing algorithms.",<br/>
                                    <strong>Monthly views: </strong>115.3 million <br/>
                                    <strong>Extra features: </strong>slideshows and hyperlapse.<br/>
                            
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a href='https://play.google.com/store/apps/details?id=video.like.lite&hl=en' target='blank'>
                                    Get the app
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={
                        classes.root} style={{backgroundColor:'#79C9A1'}}>
                        <CardActionArea>
                            <CardContent>
                                <div  >
                                <Typography color='red' gutterBottom variant="h5" component="h2">
                                    Lomotif
                                </Typography>
                                </div>
                                <Divider/>
                                <Typography variant="body2" color="textSecondary" component="p">
                                <strong>Downloads: </strong> 50,000,000+.<br/>
                                <strong>   Ratings: </strong>3.0<br/>
                                <strong>   Company valuation:</strong>30+M<br/>
                                <strong>  Based in: </strong>Singapore<br/>
                                <strong>   Uses: </strong>you can add and edit videos with tools like trim, slow motion, zoom in, zoom out, and more."<br/>
                                <strong>   Extra features: </strong>Automatically transforms clips in your camera roll into awesome music videos, no editing required.
                                <strong> Monthly views: </strong>400 million<br/>
                                    

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a href='https://play.google.com/store/apps/details?id=com.lomotif.android&hl=en' target='blank'>
                                get Lomotif
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={
                        classes.root} style={{backgroundColor:'#CF10B4'}}>
                        <CardActionArea>
                            <CardContent>
                        
                            
                                <div  style={{ backgroundColor: "#CF10B4" }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Dubmash
                                </Typography>
                                <Divider/>
                                </div>

                                <Typography variant="body2" color="textSecondary" component="p">
                                <strong>Downloads:</strong>50,000,000+ <br/>
                                <strong>Ratings:</strong>4.2<br/>
                                <strong>Company valuation:</strong>130+M<br/>
                                <strong>Based in:</strong>New York<br/>
                                <strong>Uses:</strong> Dubsmash has the world’s largest selection of sounds from songs, shows and movies<br/>
                                <strong>Monthly views:</strong>1 billion<br/>
                                <strong>Extra features:</strong>App feels less crowded by semi-pro creators and influencers.<br/>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a href='https://play.google.com/store/apps/details?id=com.mobilemotion.dubsmash&hl=en' target='blank'>
                                    get the app                               </a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>


        </div>
    );
}
