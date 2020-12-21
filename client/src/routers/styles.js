import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  app: {
    // backgroundColor: 'red'
    backgroundImage: 'linear-gradient(180deg, #96deda, #50c9c3)'
  },
  body: {
    display: 'flex',
    minHeight: '500px',
    // alignContent: 'center',
    // justifyContent: 'center',
    paddingBottom: theme.spacing(5)
    // padding: theme.spacing(1)
    // position: 'relative'
  
  },
  // sidebar: {
  //   border: '1px solid red',
  //   [theme.breakpoints.up('md')]: {
  //     display: 'none',
  //   },
  // },
}));