import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    border: '1px dashed red',
    height: '800px',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   width: '100%',
    '& .title': {
      color: '#203061',
      marginBottom: '1em',
    },
  },
  paper: {
    // border: '1px dashed orange',
    height: '450px',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // backgroundColor: 'white',
    borderRadius: '20px',
    // margin: theme.spacing(1),
    // padding: theme.spacing(2),
  },
  container: {
    height: '100%',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   color: 'black',
    //   padding: theme.spacing(1.5, 2),
    //   '& .MuiTextField-root': {
    //     width: '100%',
    //     marginBottom: theme.spacing(1),
    //     '& .MuiInputBase-root': {
    //       borderRadius: '10px',
    //     },
    //   },
  },
  // fileInput: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   color: '#203061',
  //   marginTop: theme.spacing(2),
  //   '& .MuiTypography-root, input ': {
  //     margin: theme.spacing(1)
  //   },
  //   '& input ': {
  //     color: 'black',
  //   }
  // },
  buttonSection: {
    // border: '1px solid red',
    width: '100%',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    '& .MuiButton-root': {
      width: '40%',
      height: '40px',
      borderRadius: '25px',
    },
  },
  // button: {
  //   height: '50px',
  //   border: '2px solid #84D7D2',
  //   borderRadius: '25px',
  //   margin: theme.spacing(2),
  //   backgroundColor: '#F69560'
  // }
}));
