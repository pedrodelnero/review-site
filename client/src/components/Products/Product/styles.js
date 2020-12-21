import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // border: '1px solid red',
    backgroundColor: '#FFFFFF',
    borderRadius: '50px 25px 25px 25px',
    margin: theme.spacing(1, 0.5),
    padding: theme.spacing(1, 0.5),
    // height: '100%'
    // maxWidth: 345,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    '& .MuiTypography-subtitle2, .MuiTypography-body1': {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    }
  }
}));

export default useStyles;