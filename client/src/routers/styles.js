import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  app: {
    backgroundImage: 'linear-gradient(180deg, #96deda, #50c9c3)',
  },
  body: {
    display: 'flex',
    minHeight: '100vh',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(10),
  },
}));