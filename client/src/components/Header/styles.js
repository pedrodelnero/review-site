import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F79460',
    padding: theme.spacing(1, 0),
    justifyContent: 'space-between'
  },
  menuButton: {
    display: 'none',
    size: 'small',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  titleHeader: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(0, 1),
    '& .MuiTypography-root': {
      padding: theme.spacing(0, 1),
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    '& .logo': {
      height: '70px',
      width: '70px',
      borderRadius: '25px'
    }
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
  account: {
    display: 'flex',
    flexDirection: 'column'
  },
  accountHeader: {
    display: 'flex',
    margin: theme.spacing(0, 1),
    // border: '1px solid red',
    borderRadius: '10px',
    alignItems: 'center',
    // color: 'white',
    // '&:hover': {
    //   background: 'rgb(0, 0, 0)',
      // background: '#66F2F2F2',
    // },
    '& .MuiSvgIcon-root': {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    '& .MuiButtonBase-root': {
      color: 'white',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    }
  },
  accountMenu: {
    display: 'inline-block',
    backgroundColor: 'yellow'
  }
}));