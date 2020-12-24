import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 1),
    width: '100%',
  },
  
  content: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid white',
    borderRadius: '25px',
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      height: '300px',
    }, 
    '& .makeStyles-details-12': {
      // alignItems: 'flex-end',
    },
  },
  image: {
    borderRadius: '30px',
    [theme.breakpoints.up('sm')]: {
      height: '300px',
      width: '300px',
    }, 
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // alignContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: theme.spacing(2),
    // justifyContent: 'center',
    '& .prodName': {
      color: 'red',
      fontWeight: '600',
      [theme.breakpoints.down('xs')]: {
        fontSize: '150%',
        // lineHeight: '80px'
      }, 
      [theme.breakpoints.up('sm')]: {
        fontSize: '300%',
        // lineHeight: '80px'
      }, 
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