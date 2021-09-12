import React , {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Collapse from '@material-ui/core/Collapse'
import NavbarItem from "./NavbarItem";

function Header(){
    const useStyle = makeStyles(theme => ({
      body:{
        backgroundColor : "#ffa726",
        padding : theme.spacing(1,5),
        color : "white"
      },
      title: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft : "auto"
      },
      size : {
        height : "20px;"
      },
      mobile:{
        [theme.breakpoints.up("lg")]:{
          display :"none"

        },
      }
    }));;


    const [toggle,setToggle] = useState(false);
    const classes = useStyle();


    function handleToggle(){
      setToggle(!toggle);
    }

  return (

    <AppBar position="static" className={classes.body + " "  +classes.title}>
        <Toolbar>
          <Typography variant = "h4" className={classes.brand}>
            Navbar
          </Typography>
          <Hidden mdDown >
            <NavbarItem/>
          </ Hidden>

         <Hidden lgUp>
            <IconButton edge="end" className={classes.menuButton} onClick = {handleToggle}>
              <MenuIcon />
            </IconButton>
          </ Hidden>


        </Toolbar>
        <div className={classes.mobile}>
        <Collapse in={toggle}>
          <NavbarItem className={classes.toggleMenu} />
        </Collapse>
        </div>
    </AppBar>
  );
}
export default Header;
