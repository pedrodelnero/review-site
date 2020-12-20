import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: '#FDFAE9'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  listItem: {
    // color: 'white',
    border: '1px solid black',
    borderRadius: '30px',
    width: '80%',
    padding: theme.spacing(1, 3),
    marginBottom: theme.spacing(1)
    // height: '40px',
    // size: '40px'
  }

}));