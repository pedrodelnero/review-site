import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '150px',
    color: 'black',    
    border: '1px solid red',
    backgroundColor: '#FFFFFF',
    borderRadius: '25px',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    '& .MuiTypography-root': {
      marginBottom: theme.spacing(1)
    },
    '& .MuiRating-root': {
      marginBottom: theme.spacing(2)
    }
      
  },
}));

export default useStyles;