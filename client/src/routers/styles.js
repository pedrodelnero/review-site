import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  app: {
    backgroundImage: 'linear-gradient(180deg, #96deda, #50c9c3)',
    overflow: 'hidden',
  },
  body: {
    // display: 'flex',
    width: '100%',
    minHeight: '300vh',
    marginBottom: theme.spacing(10),
  },
}));
