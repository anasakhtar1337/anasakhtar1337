import React ,{useState} from 'react';
import {useLocation} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BuyNow from '@material-ui/icons/AttachMoney';



function Product(){
  const useStyle = makeStyles( theme =>({
    body : {
      marginTop : theme.spacing(8),
      justifyContent : "center"
    },
    image : {
      width : 350,
      maxWidth :350,
      height : 400,
      border : "1px solid grey",
    },
    prev : {
      borderRadius : 100,
      position : "absolute",
      zIndex : 1,
      margin : theme.spacing(3,-1)

    },
    next : {
      borderRadius : 100,
      position : "absolute",
      zIndex : 2,
      margin : theme.spacing(3,0,0,38)
    },
    smallItemList : {
      marginTop : 10,
      width : 350,
      height : 100,
      overflow : "hidden"
    },
    imageContainer : {
      display : "flex",
      flexDirection : "row",
      transition: "transform 0.25s"
    },
    smallImage : {
      width : 100,
      height : 80,
      border : "1px solid grey",
      margin : theme.spacing(0,1)
    },
    details : {
      marginBottom : "auto",
      width : 400
    },
    sizeList : {
      display : "flex",
      flexDirection : "row",
      margin : theme.spacing(2,0,0,0)
    },
    sizeAvailable : {
      margin : 0
    },
    price : {
      fontSize : 30,
      textDecoration : "line-through"
    }
  }) );
  const [x,setX] = useState(0);
  const [titleImage,setTitleImage] = useState(require("./static/images/hello.jpg").default);
  const location = useLocation();
  const item = location.data;
  const [radio,setRadio] = useState('');


  function handleClick(e){
    if(e.currentTarget.name === "next")
    {
      setX(x => x - 120);
    }
    else {
      setX(x => x + 120);
    }
    }

  function handleImageClick(e){
    const{src}=e.target;
    setTitleImage(src);
  }

  function handleRadioChange(e){
    const {value} = e.target;
    setRadio(value);
  }

  const classes = useStyle();



  return (
    <Grid container spacing={5} direction = "row" className={classes.body}>

       <Grid item >
        <Grid>
          <Card className={classes.root}>
            <CardMedia
              className = {classes.image}
              // eslint-disable-next-line
              image = {titleImage}
              title="Paella dish"
            />
          </Card>
        </ Grid>

        <Grid container className = {classes.smallItemList}>


          <Button color="primary" className={classes.prev} name="prev" onClick={handleClick}>
              <ArrowBackIosIcon />
          </Button>
          <Button color="primary" className={classes.next} name="next" onClick={handleClick}>
              <ArrowForwardIosIcon />
          </Button>


          <Grid className={classes.imageContainer} style={{transform: `translateX(${x}px)`}}>
            <img src={require("./static/images/hello.jpg").default} alt="SHOES " className = {classes.smallImage} onClick={handleImageClick}/>
            <img src={require("./static/images/world.jpg").default} alt="SLIPPER" className = {classes.smallImage} onClick={handleImageClick}/>
          </ Grid>
        </ Grid>

       </Grid>

       <Grid item className={classes.details}>
          <Divider />
          <Box mt={1}>
            <Typography variant="body2" >{item.category}</ Typography>
          </ Box>
          <Box>
            <Typography variant="h3">{item.name}  </ Typography>
          </ Box>
          <Box mt={2}>
            <Typography variant="subtitle1">{item.description}</ Typography>
          </ Box>
          <Box mt={4}>

            <Typography variant="h6">SIZE AVAILABLE : </ Typography>

            <Box mt={1}>

              <RadioGroup className={classes.sizeList}>
              {(JSON.parse(item.size)).map( size =>{
                 return <FormControlLabel
                           control ={<Radio />}
                           label={size}
                           value={size}
                           labelPlacement="top"
                           checked={radio === `${size}`}
                           onChange={handleRadioChange}
                           className={classes.sizeAvailable}
                          />
              })}
              </ RadioGroup>

            </ Box>
          </ Box>
          <Box mt={3}>
            <Typography variant="h3">${item.price}.00</ Typography>
          </ Box>
          <Box mt={3}>
            <Button variant="contained" fullWidth startIcon=<ShoppingCartIcon /> color="primary">
                ADD TO CART
            </Button>
          </ Box>
          <Box mt={1}>
            <Button variant="contained" fullWidth startIcon=<BuyNow /> color="primary">
                BUY NOW
            </Button>
          </ Box>


       </Grid>

    </Grid>
);
}

export default Product;
