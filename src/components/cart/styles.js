import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "1%",
    marginRight: "15px",
    flexGrow: "1",
  },
  emptyButton: {
    margin: "10px",
    minWidth: "10px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    margin: "10px",
    minWidth: "10px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",    
    padding:'1%',
    margin: "100px 0 ",
    width: "100%",
    justifyContent: "space-between",
     
  },
  //CartItem
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  total: {
    float: "right",
    flexGrow: "1",
    display: "inline-flex",
    color: "blue",
    marginTop: "1%",
    marginRight: "15px",    
  },
  subtotal: {
    float: "right",
    flexGrow: "1",
    display: "inline-flex",
    color: "#000",
    marginTop: "1%",
    marginRight: "10px",
  },
  containerTitle: {
    display: "inline-flex",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));

 

 
 