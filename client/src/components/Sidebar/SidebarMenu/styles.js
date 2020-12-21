import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // backgroundColor: '#FDFAE9'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    // border: '1px solid black',
    borderRadius: '30px',
    boxShadow: '1px 1px #000000',
    width: '85%',
    padding: theme.spacing(1, 2),
    marginBottom: theme.spacing(1)
  }

}));