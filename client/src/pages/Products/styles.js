import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    width: '100%'
  },
  button: {
    backgroundColor: '#203061',
    borderRadius: '25px',
    color: 'white',
    height: '50px',
    width: '200px',
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '& .MuiButton-label': {
      // margin: theme.spacing(0, 1),
      fontSize: '19px',
      '& .MuiButton-startIcon': {
        border: '1px solid white',
        borderRadius: '30px'

      }
    }
  },
  grid: {
    display: 'grid',
    width: '100%',
    justifyItems: 'center',
    // justifyItems: 'center',
    // margin: theme.spacing(1, 0),
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
    },
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    },
  }
}));