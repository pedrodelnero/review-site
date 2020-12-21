import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // backgroundColor: '#FDFAE9'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .MuiButton-root': {
      height: '50px',
      width: '100%',
      // borderRadius: '30px',
      boxShadow: '1px 1px #000000',
    }
    // '& .MuiTypography-root': {
    //   border: '1px solid black',
    //   borderRadius: '30px',
    //   boxShadow: '1px 1px #000000',
    //   color: 'red',
    //   width: '70%',
    //   padding: theme.spacing(1, 3),
    //   marginBottom: theme.spacing(1)
    // }
  },
}));