import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    // flexDirection: 'row',
    backgroundColor: "#F79460",
    padding: theme.spacing(1, 0),
    // justifyContent: 'center'
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      width: "65%",
      height: "65%",
      display: "block",
      margin: "auto",
    },
  },
  titleHeader: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(0, 1),
    "& .MuiTypography-root": {
      padding: theme.spacing(0, 1),
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    "& .logo": {
      height: "70px",
      width: "70px",
      borderRadius: "25px",
      [theme.breakpoints.down("xs")]: {
        alignItems: "center",
      },
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    "& .MuiButtonBase-root": {
      textAlign: "center",
      color: "white",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  account: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "white",
  },
  accountTitle: {
    height: "100%",
    width: "150px",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      width: "50px",
      height: "50px",
      margin: "auto",
    },
    "& .MuiButtonBase-root": {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    "& .accountIcon": {
      marginLeft: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  },
  accountMenu: {
    position: "absolute",
    right: "1%",
    top: "75%",
    width: "120px",
    border: "1px solid black",
    backgroundColor: "#4A4953",
    borderRadius: "15px",
    color: "white",
    // padding: theme.spacing(1),
    // display: 'inline-block',
    // backgroundColor: 'yellow
    "& .MuiTypography-root": {
      display: "flex",
      justifyContent: "center",
      padding: theme.spacing(1),
    },
    "& .logOutButton": {
      fontSize: "18px",
      color: "white",
    },
  },
}));
