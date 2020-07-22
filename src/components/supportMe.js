import React from 'react';
import
{makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import
{Divider, Paper} from '@material-ui/core';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(
    {
        root: {
            maxWidth: '100%'
        }
    }
);

export default function SupportMe()
{
    const classes = useStyles();

    return (
        <div>
            <Grid container disabled
                spacing={3}>
                <Grid item
                     xs={12} sm={6}>
                    <Paper disabled
                        className={
                            classes.root
                    }>

                        <CardMedia className={
                            classes.media
                        }>
                            <FavoriteIcon color='secondary'/>
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                A sincere Request:
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">

                            Running a website requires developement and server expenditure.If few viewers decide to donate to this site this will mean a lot to developers.
            You can donate through buymeCoffe which accepts any card.You can also use google pay to pay using UPI .A more convinient method would be paypal.
            All the transcation are secured .


                            </Typography>
                        </CardContent>

                        <Button size="small" color="primary">
                        <a href="https://www.patreon.com/bePatron?u=39091140 " target='blank'>Open patreon</a><br/>
                                
                        </Button>
                    </Paper>
                </Grid>
                <Grid item
                     xs={12} sm={6}>
                    <Card className={
                        classes.root
                    }>

                        <CardMedia className={
                            classes.media
                        }>
                            <CardGiftcardIcon color='secondary'/>
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Donate methods:
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <LocalCafeIcon color='secondary'/>
                                <a href=" https://www.buymeacoffee.com/aswin961" target='blank'>Buy me a coffee</a><br/>
                                <Divider/>
                                <AccountBalanceWalletIcon color='primary'/>
                                <a href="https://www.patreon.com/bePatron?u=39091140 " target='blank'>Become a patron</a><br/>
                                <Divider/>
                                <hr/>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header">
                                        <Typography className={
                                            classes.heading
                                        }>Google Pay(Any UPI)</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        
                                            bhusalaswin6-1@okaxis
                                        
                                    </AccordionDetails>
                                </Accordion>
                                <Divider/>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header">
                                        <Typography className={
                                            classes.heading
                                        }>Paypal id</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            1705680@kiit.ac.in
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>


                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
