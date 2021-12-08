
import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    margin: "15px auto",
    maxWidth: "80%",
  },
  main: {
    margin: "10px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    margin: "10px auto",
    width: "50%",    
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",    
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",    
  }, 
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
     
  },
}));