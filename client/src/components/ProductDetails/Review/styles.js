import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      height: '135px',
      border: '1px solid #F79460',
      borderRadius: '50px 25px 25px 25px',
      margin: theme.spacing(1, 0.5),
      padding: theme.spacing(1, 0.5),
      '& .MuiTypography-root': {
        textAlign: 'center'
      }
  },
  content: {

    // '& .MuiTypography-subtitle2, .MuiTypography-body1': {
    //   [theme.breakpoints.down('sm')]: {
    //     display: 'none',
    //   },
    // }
  }
}));

export default useStyles;