import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {ListAndImage1,ListAndImage2,ListAndImage3} from './listAndImage';
import allInfo2 from '../assets/allInfo2.jpg'
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    
  },
  button: {
    marginTop: theme.spacing(0),
    marginRight: theme.spacing(0),
  },
  actionsContainer: {
    marginBottom: theme.spacing(0),
  },
  resetContainer: {
    padding: theme.spacing(0),
  },
}));

function getSteps() {
  return ['Get the app', 'know functions', 'Create your first video'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ListAndImage1/>
    case 1:
      return  <ListAndImage2/>;
  

    case 2:
      return <ListAndImage3/> ;
    default:
      return 'Unknown step';
  }
}

export default function StepsToStart() {
  const [expanded, setExpanded] = React.useState(false);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - congrats!!</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
       <div>
      
     
      
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography className={classes.secondaryHeading}>This is an image to summarize few points:</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <img src={allInfo2} alt='allInfo' Align-Items= 'center' height="500" width='100%'/>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
   
  );
}