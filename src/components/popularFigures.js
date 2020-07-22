import React from 'react';
import{makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  charlie from '../assets/charlie.jpg'
import Faisal from '../assets/Faisal.jpg'
import Baby from '../assets/Baby.jpg'
import Michael from '../assets/Michael.jpg'
import Spencer from '../assets/Spencer.jpg'
import Riyaz from '../assets/Riyaz.jpg'
import Loren from '../assets/Loren.jpg'
import zach from '../assets/zach.jpg'
import Addison from '../assets/Addison.jpg'
import MostFollowed from './mostFollowed';

const useStyles = makeStyles((theme) => (
    {
        root: {
            flexGrow: 1
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary
        }
    }
));

export default function PopularFigures()
{
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <div>
            The following list has been taken from wikipedia.<br/>
            <Button size="small" color="primary">
                <a href='https://en.wikipedia.org/wiki/List_of_most-followed_TikTok_accounts' target='blank'>
                   visit @wikipedia
                </a>
            </Button><br/>
                This holds true as of 2020 july 18.<br/>
                Followers and likes are in Million.
            
        </div>
    <Grid container spacing={1}>
            <Grid item xs>
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                className={classes.media}
                >
                <img src={charlie} />
                </CardMedia>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Charli D'Amelio
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    userName:@charlidamelio'<br/>
                    Followers:72.1<br/>
                    Likes(M):5131.0<br/>
                    Country:USA<br/>
                    contentType:Dancer and social media personality<br/>

                </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                <a href='https://www.tiktok.com/@charlidamelio?lang=en' target='blank'>
                    VIew on TikTok
                </a>
                </Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs>
                <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                >
                <img src={Addison} />
                </CardMedia>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Addison Rae
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    userName:@addisonre <br/>
                    Followers:51.0 <br/>
                    Likes:2921.5 <br/>
                    Country:USA<br/>
                    contentType:Dancer and social media personality<br/>

                </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                <a href='https://www.tiktok.com/@addisonre?lang=en' target='blank'>
                    View on TikTok
                </a>
                </Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs>
                <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                >
                <img src={zach} />
                </CardMedia>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Zach King
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    userName: 	@zachking <br/>
                    Followers:45.7 <br/>
                    Likes:514.7<br/>
                    Country:USA<br/>
                    contentType:Filmmaker and social media personality <br/>

                </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                <a href='https://www.tiktok.com/@zachking?lang=en' target='blank'>
                    View on TikTok
                </a>
                </Button>
                </CardActions>
                </Card>
            </Grid>
    </Grid>
    <Grid container spacing={1}>
        <Grid item xs>
            <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                className={classes.media}>
                     <img src={Loren} />
                </CardMedia>
                    
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Loren Gray
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    userName:@lorengray <br/>
                    Followers:45.6 <br/>
                    Likes:2485.3 <br/>
                    Country:USa<br/>
                    contentType:Singer and social media personality <br/>

                </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                <a href='https://www.tiktok.com/@lorengray?lang=en' target='blank'>
                    View on TikTok
                </a>
                </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs>
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                className={classes.media}
                >
                <img src={Riyaz} />
                </CardMedia>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Riyaz Aly 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    userName:@riyaz.14  <br/>
                    Followers:43.0 <br/>
                    Likes(M):2041.6<br/>
                    Country: India 	<br/>
                    contentType:Social media personality <br/>

                </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                <a href='https://www.tiktok.com/@riyaz.14?lang=en' target='blank'>
                    View on TikTok
                </a>
                </Button>
                </CardActions>
                </Card>
        </Grid>
    
        <Grid item xs>
            <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                className={classes.media}
                >
                <img src={Spencer} />
                </CardMedia>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Spencer Polanco Knight 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    userName:@spencerx <br/>
                
                    Followers:38.4 <br/>
                    Likes:917.5 <br/>
                    Country:USA<br/>
                    contentType: 	Beatboxer and social media personality <br/>

                </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                <a href='https://www.tiktok.com/@spencerx?lang=en' target='blank'>
                    View on TikTok
                </a>
                </Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
    <Grid container spacing={1}>
        <Grid item xs>
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                className={classes.media}
                >
                <img src={Michael} />
                </CardMedia>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Michael Le 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    userName:@justmaiko <br/>
                    
                    Followers:34.4<br/>
                    Likes:884.6<br/>
                    Country:USA<br/>
                    contentType:Dancer and social media personality <br/>

                </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                <a href='https://www.tiktok.com/@justmaiko?lang=en' target='blank'>
                    View on TikTok
                </a>
                </Button>
                </CardActions>
                </Card>
        </Grid>
        <Grid item xs>
                <Card className={classes.root}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        >
                        <img src={Baby} />
                    </CardMedia>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Baby Ariel
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        userName:@babyariel <br/>
                            Followers:34.4 <br/>
                        Likes:1830.2 <br/>
                        Country:USA<br/>
                        contentType: 	Singer, actress, and social media personality<br/>

                    </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                    <a href='https://www.tiktok.com/@babyariel?lang=en' target='blank'>
                    View on TikTok
                    </a>
                    </Button>
                    </CardActions>
                </Card>
        </Grid>
        <Grid item xs>
                <Card className={classes.root}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        >
                        <img src={Faisal} />
                        </CardMedia>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Faisal Shaikh
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        userName:'@mr_faisu_07 <br/>
                        
                        Followers:31.7<br/>
                        Likes:1963.5 <br/>
                        Country:India<br/>
                        contentType:Social media personality <br/>

                    </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                    <a href='https://www.tiktok.com/@mr_faisu_07?lang=en' target='blank'>
                    View on TikTok
                    </a>
                    </Button>
                    </CardActions>
                    </Card>
            </Grid>
        
    </Grid>
    <div>
        The remaining Top 20 according to wikipedia as of july 2020
    </div>
    <Grid  container spacing={1}>
        <Grid item xs>
             <MostFollowed/>
        </Grid>
        
        
    </Grid>
    


</div>);

}
