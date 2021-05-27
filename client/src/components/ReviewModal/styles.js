import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    width: '500px',
    position: 'absolute',
    top: '15%',
    right: '30%',
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0),
      top: '10%',
      right: '10%',
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0),
      top: '10%',
      right: '5%',
      width: '70%',
    },
  },
  header: {
    color: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontWeight: 100,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
    '& .MuiSvgIcon-root': {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  },
  body: {
    '& .MuiBox-root': {
      marginBottom: theme.spacing(2),
      '& .MuiTypography-root': {
        marginBottom: theme.spacing(1),
      },
      '& .MuiFormControl-root': {
        width: '100%',
      },
    },
  },
}));
