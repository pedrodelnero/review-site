import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    // marginBottom: '50px',
    padding: theme.spacing(1, 0),
    justifyContent: 'space-between'
  },
  menuButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline',
    },
  },
  titleHeader: {
    display: 'flex',
    border: '1px solid red',
    alignItems: 'center',
    '& .MuiTypography-root': {
      padding: theme.spacing(0, 1),
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    '& .MuiButtonBase-root': {
      border: '1px solid white',
      borderRadius: '10px',
      color: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  accountHeader: {
    display: 'flex',
    // alignItems: 'center',
    border: '1px solid red',
    borderRadius: '10px',
    padding: theme.spacing(0, 1),
    color: 'white',
    // '&:hover': {
    //   background: 'rgb(0, 0, 0)',
      // background: '#66F2F2F2',
    // },
    '& .MuiSvgIcon-root': {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    '& .MuiButtonBase-root': {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    }
  },
}));