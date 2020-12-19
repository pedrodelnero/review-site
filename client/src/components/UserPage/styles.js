import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
  },
  typography: {
    padding: theme.spacing(2),
  }
}));