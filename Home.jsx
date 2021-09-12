import React , { useState , useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


function Home(){

  const useStyle = makeStyles ( theme =>({
    body:{
      margin : theme.spacing(8,0),
      padding : theme.spacing(0,8),
      display : "flex",
    },
    root: {
      width : 280,
      maxWidth: 280,
      margin : theme.spacing(2),
      [theme.breakpoints.down("sm")]:{
        width : 220,
        maxWidth: 220,
        margin : theme.spacing(5,0)
      },
    },
    media: {
      height: 100,
      paddingTop: '56.25%', // 16:9
    },
    content : {
      paddingBottom : 10
    },
    alignRight : {
      float  : "right",
      marginTop : 8
    },
    newProduct : {
      border : "3px solid black",
      borderRadius : 100,
      position : "absolute",
      bottom : "12%",
      right : "7%",
      color : "black",
      width : 70 ,
      height : 70
    }
  }));

  useEffect ( ()=>{
    getAllData();
  },[]);


  function getAllData(){
    axios.get("http://localhost:3000", {
      headers : {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json"
      }
    })
    .then((res) =>{
      setItems(res.data);
   });
 }


  const [items ,setItems] = useState([]);
  const history = useHistory();


  function handleNewProductClick(){
    history.push("/Practise");
  }

  function handleItemClick(item){
    history.push({pathname : "/Product-details" , data :  item});
  }





  const classes = useStyle();

  return (
    <Grid container className={classes.body}>
    <Button color="primary" className = {classes.newProduct} onClick={handleNewProductClick}>
      <AddIcon fontSize="large"/>
    </Button>
    {items.map( item =>{
      return (
      <Grid key={item.id} id={item.id} item xl={2} lg={3} md={4} sm={6} onClick={()=>handleItemClick(item)}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            // eslint-disable-next-line
            image = {require("./static/images/"+ `${item.image}`).default}
            title="Paella dish"
          />
          <CardContent className={classes.content}>
            <Typography variant="h5" color="textPrimary" display="inline">
            {item.name}
            </Typography>
            <Typography variant="caption" color="textSecondary" display="inline" className={classes.alignRight}>
            {item.category}
            </Typography>
            <Typography variant="body1" color="textSecondary">
            {item.description}
            </Typography>
            <Typography variant="h5" color="textPrimary" className={classes.alignRight}>
            ${item.price}.00
            </Typography>
          </CardContent>
        </Card>
      </Grid>


    );
    })}

    </ Grid>



  );
}

export default Home;
