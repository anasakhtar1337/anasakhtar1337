import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from "react-router-dom";


function NavabarItem(){
  const useStyle = makeStyles(theme =>({
   grow: {
    flexGrow: 1
   },
   search: {
     position: 'relative',
     borderRadius: 100,
     backgroundColor : "#e8eaf6",
     margin : "auto",
     justifyContent:"center",
     width: '50%',
     height : "50px",
     [theme.breakpoints.down("md")]:{
       width : "80%",
     }
   },
   searchIcon: {
     padding: theme.spacing(0, 2),
     height: '100%',
     position: 'absolute',
     pointerEvents: 'none',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     color : "black"
   },
   input: {
     padding: theme.spacing(1, 1, 1, 0),
     paddingLeft: theme.spacing(8),
     width: '100%'
   },
   menu : {
     display : "flex",
     flexDirection : "row",
     justifyContent:"center",
     [theme.breakpoints.down("md")]:{
       flexDirection : "column",
       margin : theme.spacing(3,0,0,0)
     },
   },
   menuItem : {
     justifyContent : "center",
     minHeight : "60px"
   }
 }));
 const classes = useStyle();
 const history = useHistory();


  function handleClick(event){
    const {id} = event.target;
    history.push(id);
    }



  return (
    <div className={classes.grow +" "+ classes.menu}>

        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search…"
                className ={classes.input}
            />
        </div>
        <MenuList className={classes.menu} onClick={handleClick}>
          <MenuItem id="/Practise" className={classes.menuItem}>
            Practise
          </ MenuItem>
          <MenuItem id="/" className={classes.menuItem}>
            HOME
          </ MenuItem>
          <MenuItem id="/ContactUs" className={classes.menuItem}>
            CONTACT US
          </ MenuItem>
          <MenuItem id="/Policy" className={classes.menuItem}>
            POLICY
          </ MenuItem>
          <MenuItem id="/Feature" className={classes.menuItem}>
            FEATURES
          </ MenuItem>
        </MenuList>
      </div>


  );
}

export default NavabarItem;
