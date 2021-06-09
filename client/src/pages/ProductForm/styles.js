import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    height: '800px',
    '& .title': {
      color: '#203061',
      marginBottom: '1em',
    },
  },
  paper: {
    height: '450px',

    borderRadius: '20px',
  },
  container: {
    height: '100%',
  },

  buttonSection: {
    // border: '1px solid red',
    width: '100%',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    '& .MuiButton-root': {
      width: '40%',
      height: '50px',
      borderRadius: '25px',
    },
  },
}));
