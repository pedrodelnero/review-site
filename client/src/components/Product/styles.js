import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '300px',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      width: '250px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '200px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '150px',
    },
  },
  media: {
    height: '300px',
    [theme.breakpoints.down('md')]: {
      height: '200px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '150px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100px',
    },
  },
}));

export default useStyles;
