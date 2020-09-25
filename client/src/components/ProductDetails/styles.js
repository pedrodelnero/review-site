import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    direction: 'column',
    padding: '1rem' 
  },
  formButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '30px auto'
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    maxWidth: 345,
    justifyContent: 'center'
  },
  formRoot: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    }
  },
}));