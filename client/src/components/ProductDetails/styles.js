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
    // justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid white',
    borderRadius: '25px',
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      // display: 'flex',
      // flexDirection: 'column',
      // height: '300px',
    }, 
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
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-end',
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
    }
  },
  detailButtons: {
    marginTop: theme.spacing(5),
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      // alignItems: 'flex-end',
    }, 
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      // alignItems: 'center',
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
      // border: '1px solid #F69560',
      backgroundColor: '#F70913',
    },
  },
  formButton: {
    '& .MuiButton-root': {
      border: '1px solid white',
      [theme.breakpoints.down('sm')]: {
        height: '95px',
          width: '95px',
          borderRadius: '50%',
      },  
      '& MuiButton-label': {
        wordWrap: 'normal'
      }
    }
  },
  reviews: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}));