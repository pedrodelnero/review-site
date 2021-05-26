import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  button: {
    backgroundColor: '#203061',
    borderRadius: '10px',
    color: 'white',
    margin: theme.spacing(3, 0, 2),
  },
}));

export default useStyles;
