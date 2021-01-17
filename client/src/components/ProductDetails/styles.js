import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 1),
    width: '100%',
  },
  
  content: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid white',
    borderRadius: '25px',
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    }, 
  },
  image: {
    borderRadius: '30px',
    [theme.breakpoints.up('sm')]: {
      maxHeight: '300px',
      maxWidth: '300px',
    }, 
    [theme.breakpoints.down('sm')]: {
      maxHeight: '200',
      maxWidth: '200px',
    }, 
  },
  details: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      marginRight: theme.spacing(5),
      fontSize: '300%',
    }, 
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
      marginTop: theme.spacing(3),
      fontSize: '150%',
    }, 
    '& .prodName': {
      color: 'red',
      fontWeight: '600',
      [theme.breakpoints.up('sm')]: {
        textAlign: 'end',
        justifyItem: 'flex-start',
        fontSize: '100%',
      }, 
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0, 3),
        textAlign: 'center',
        fontSize: '110%',
      }, 
    },
    '& .author': {
      display: 'flex',
      textAlign: 'end',
      // color: 'red'
    }
  },
  detailButtons: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      marginTop: 'auto',
    }, 
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(5),
      width: '100%',
      justifyContent: 'center',
    }, 
    '& .MuiButton-root': {
      borderRadius: '20px',
      marginLeft: theme.spacing(1)
    },
    '& .editButton': {
      border: '1px solid #F69560',
      backgroundColor: '#D8D9DB',
    },
    '& .deleteButton': {
      padding: theme.spacing(1, 3),
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: '#F70913',
    },
  },
  formButton: {
    marginBottom: '15px',
    '& .addReview': {
      border: '1px solid white',
      [theme.breakpoints.down('xs')]: {
        height: '95px',
        width: '95px',
        borderRadius: '50%',
      },  
      '& MuiButton-label': {
        wordWrap: 'normal'
      }
    }
  },
  reviewForm: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },  
    [theme.breakpoints.up('sm')]: {
      width: '500px',
    },  
    '& .MuiRating-root': {
      marginBottom: '10px',
    },
    '& .MuiFormControl-root': {
      backgroundColor: 'white',
      border: '1px solid #C61362',
      borderRadius: '8px',
      marginBottom: '10px',   
      '& .MuiInputBase-input': {
        margin: '5px',
      }
    },
    '& .MuiButton-root': {
      width: '95px',
    }
  },
}));