import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '150px',
    padding: theme.spacing(3, 5),
    marginBottom: theme.spacing(1),
  },
  revHeader: {
    borderBottom: '1px solid grey',
    padding: theme.spacing(2, 1, 2, 3),
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
  },
  authorReview: {
    '& .MuiRating-root': {
      marginBottom: theme.spacing(3),
    },
  },
}));

export default useStyles;
