import { makeStyles } from '@material-ui/core/styles';

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
}

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    margin: '0 10rem'
  },
  button: {
    margin: '20px auto'
  },
  form: {
    display: 'none'
  }
}));



export const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(${top}%, ${left}%)`,
  };
}