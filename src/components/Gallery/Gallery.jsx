import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsForGallery } from '../../redux/gallery/galleryOperations';
import { selectCarsForGallery } from '../../redux/gallery/gallerySelectors';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MobileStepper from '@mui/material/MobileStepper';
import css from './Gallery.module.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Gallery() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCarsForGallery);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = cars.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  useEffect(() => {
    dispatch(fetchCarsForGallery());
  }, []);

  return (
    <section className={css.wrapper}>
      <h2 className={css.visuallyHidden}>Gallery</h2>
      <Box
        sx={{
          width: 700,
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: '#1b1b1d',
          }}
        ></Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {cars.map((step, index) => (
            <div key={step.id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  className={css.image}
                  sx={{
                    height: 400,
                    display: 'block',
                    overflow: 'hidden',
                    width: 700,
                  }}
                  src={step.img}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            '.MuiMobileStepper-dot': {
              bgcolor: '#333',
            },
            '.MuiMobileStepper-dotActive': {
              bgcolor: '#ba8fff',
            },
            bgcolor: '#1b1b1d',
          }}
          nextButton={
            <Button
              size="medium"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{
                '&&:disabled': {
                  color: '#333',
                },
                color: '#ba8fff',
                fontFamily: 'Manrope',
              }}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="medium"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{
                color: '#ba8fff',
                '&&:disabled': {
                  color: '#333',
                },
                fontFamily: 'Manrope',
              }}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </section>
  );
}

export default Gallery;
