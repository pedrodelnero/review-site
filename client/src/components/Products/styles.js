import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    backgroundColor: '#203061',
    borderRadius: '20px',
    color: 'white',
    width: '150px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '164px',
    // gridTemplateRows: 'auto',
    // gridRowStart: 1,
    // paddingTop: 0,
    // gridAutoRows: 'minMax(100px, auto)',
    alignItems: 'flex-start',
    // justifyContent: 'start',
    flexDirection: 'row',
  }
}));