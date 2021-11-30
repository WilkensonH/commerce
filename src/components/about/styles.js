import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: "70px",
    maxWidth: "100%",
    zIndex: "1",
  },
  main: {
    margin: "15px",
    minHeight: "100vh",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  mainBg: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: " 15px 10px",
    "@media (max-width:780px)": {
      display: "inline-block",
      width: "100%",
      margin: "auto",
    },
  },
  mainText: {
    padding: "0 15px 20px",    
  },
}));
