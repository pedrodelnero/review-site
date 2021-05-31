import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: 0,
    margin: 0,
  },

  product: {
    display: 'flex',
    position: 'sticky',
    top: 0,
    height: '200px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      height: 'auto',
    },
  },
  image: {
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      maxHeight: '200',
      maxWidth: '200px',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    marginBottom: theme.spacing(2),
    '& .prodName': {},
  },
  starReview: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiRating-root': {
      marginRight: theme.spacing(1.5),
    },
  },
  deleteProd: {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  body: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(0, 3),
  },
  writeReview: {
    width: '500px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  writeReviewCont: {
    // border: '1px solid red',
    padding: theme.spacing(2, 3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
}));
