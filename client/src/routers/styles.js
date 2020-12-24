import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  app: {
    // backgroundColor: 'red'
    backgroundImage: 'linear-gradient(180deg, #96deda, #50c9c3)',
    height: '100%',
  },
  body: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: '100px'
    // paddingBottom: '100px'
  },
  footer: {
    
  }
  // sidebar: {
  //   border: '1px solid red',
  //   [theme.breakpoints.up('md')]: {
  //     display: 'none',
  //   },
  // },
}));
// #page-container {
//   position: relative;
//   min-height: 100vh;
// }

// #content-wrap {
//   padding-bottom: 2.5rem;    /* Footer height */
// }

// #footer {
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 2.5rem;            /* Footer height */
// }