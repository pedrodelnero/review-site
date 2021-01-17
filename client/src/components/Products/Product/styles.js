import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyItems: 'center',
    asignItems: 'center',
    textDecoration: 'none',
    color: 'black',    
    // border: '1px solid red',
    backgroundColor: '#FFFFFF',
    borderRadius: '50px 25px 25px 25px',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      height: '220px',
      width: '114px',
      alignItems: 'center',
      // justifyContent: 'center',
      // '& .'
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      // alignItems: 'center',
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
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
      '& .prodTitle': {
        textAlign: "center"
      },
      '& .prodAuthor, .prodDescription': {
        display: 'none',
      },
    },
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-end',
      marginRight: theme.spacing(2),
      '& .prodTitle': {
        textAlign: "end",
        fontSize: '110%',
        fontWeight: 600,
        width: '100%',
      },
    },
  }
}));

export default useStyles;