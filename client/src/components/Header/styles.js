import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexDirection: 'column',
    marginBottom: '50px',
    justifyContent: 'space-between'

  },
  titleHeader: {
    display: 'flex',
    border: '1px solid red',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonsHeader: {
    justifyContent: 'space-between'

  },
  accountHeader: {
    display: 'flex',
    // alignItems: 'center',
    // border: '1px solid black',
    borderRadius: '10px',
    // padding: theme.spacing(0, 1),
    color: 'white',
    '&:hover': {
      background: 'rgb(0, 0, 0)',
      // background: '#66F2F2F2',
    },
    customWidth: {
      maxWidth: '500px',
    },
    button: {
      border: '2px solid red',
      // '&:hover': {
      //   background: '##4A4953',
      //   color: 'white'
      // },
      
    }
  },
}));