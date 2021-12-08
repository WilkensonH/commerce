import { makeStyles, alpha } from "@material-ui/core/styles";
 

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
  },
  logo: {
    color: "red",
    fontSize: "15px",
    "&:hover": {
      color: "red",
      opacity: ".8",
    },
  }, 
  logoHover: {
    color: "white",
    "&:hover": {
      color: "red",
      transform: "scale(20px)",
      logo: {
        color: "white",
      },
    },
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },  
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  navLinks: {
    marginRight: "10px",
    color: "white",
    "&:hover": {
      color: "red",
    },
    "&:active": {
      color: "blue",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0), 
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
