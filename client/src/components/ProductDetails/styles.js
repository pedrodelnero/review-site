import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'column',
    // padding: '1rem' 
    padding: theme.spacing(1, 1),
    width: '100%'
  },
  
  content: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid white',
    borderRadius: '25px',
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1),
    '& .MuiTypography-h5, .MuiTypography-body1': {
      padding: theme.spacing(0, 1),
    }
  },
  formButton: {
    '& .MuiButton-root': {
      border: '1px solid white',
      [theme.breakpoints.down('sm')]: {
        height: '95px',
          width: '95px',
          borderRadius: '50%',
      },  
      '& MuiButton-label': {
        wordWrap: 'normal'
      }
    }
  },
    reviews: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      // gridTemplateRows: '164px',
    },
}));