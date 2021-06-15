import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2),
  },
  addProdBox: {
    marginLeft: theme.spacing(8),
    width: '400px',
    padding: theme.spacing(2, 3),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      width: 'auto',
    },
    '& .MuiButtonBase-root': {
      marginLeft: theme.spacing(2),
    },
  },
  textfield: {
    height: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: 'lightgrey',
    '& :hover': {
      backgroundColor: 'white',
    },
  },
  searchRow: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(0, 2),
    margin: theme.spacing(1),
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    padding: theme.spacing(0, 2),
    marginBottom: theme.spacing(1),
  },
}));
