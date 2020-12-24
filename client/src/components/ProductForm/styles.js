import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .title': {
      color: '#203061',
      // marginLeft: theme.spacing(2)
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '20px',
    margin: theme.spacing(1),
    padding: theme.spacing(1, 0),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    // width: '100%',
    padding: theme.spacing(1.5, 2),
    '& .MuiTextField-root': {
      width: '100%',
      marginBottom: theme.spacing(1),
      '& .MuiInputBase-root': {
        borderRadius: '10px',
      },
    },
  },
  fileInput: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#203061',
    marginTop: theme.spacing(2),
    '& .MuiTypography-root, input ': {
      // color: 'black',
      margin: theme.spacing(1)
    },
    '& input ': {
      color: 'black',
    }
  },
  button: {
    height: '50px',
    border: '2px solid #84D7D2',
    borderRadius: '25px',
    margin: theme.spacing(2),
    backgroundColor: '#F69560'

  }
}));