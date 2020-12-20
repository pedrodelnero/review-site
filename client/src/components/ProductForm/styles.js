import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: '20px',
    height: '300px',
    margin: theme.spacing(0, 1),
    padding: theme.spacing(1, 2)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    
    '& .MuiTextField-root, .MuiButton-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));