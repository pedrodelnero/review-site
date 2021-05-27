import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid red',
    textDecoration: 'none',
    display: 'flex',
    // asignItems: 'center',
    borderRadius: '50px 25px 25px 25px',
    marginBottom: theme.spacing(1),
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      height: '220px',
      width: '114px',
      alignItems: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      height: '180px',
      width: '400px',
      justifyContent: 'space-around',
    },
  },
  header: {
    display: 'flex',
    width: '100%',
    minHeight: '125px',
    justifyContent: 'center',
    // backgroundColor: 'black'
    [theme.breakpoints.down('xs')]: {
      alignItems: 'flex-end',
    },
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
    },
  },
  image: {
    borderRadius: '20px',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '100px',
      width: '100px',
    },
    [theme.breakpoints.up('sm')]: {
      maxHeight: '120px',
      maxWidth: '120px',
    },
  },
  content: {
    border: '1px dashed red',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
      '& .prodTitle': {
        textAlign: 'center',
      },
      '& .prodAuthor, .prodDescription': {
        display: 'none',
      },
      '& .MuiRating-root': {
        border: '1px dashed orange',
        size: 'small',
        // width: '80%',
      },
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'end',
      marginRight: theme.spacing(2),
      '& .prodTitle': {
        fontSize: '110%',
        fontWeight: 600,
        // width: '100%',
      },
    },
  },
}));

export default useStyles;
