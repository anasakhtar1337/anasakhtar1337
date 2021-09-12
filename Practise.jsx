import React,{ useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import PhotoCameraSharpIcon from '@material-ui/icons/PhotoCameraSharp';
import Button from '@material-ui/core/Button';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


function Practise(){
  const useStyle = makeStyles( theme => ({
    body : {
      marginTop : theme.spacing(8),
      justifyContent : "center"
    },
    image : {
      width : 350,
      objectFit : "cover",
      maxWidth :350,
      height : 400,
      border : "1px solid grey",
      "&:hover" : {
        opacity : 0.3,
        '& + $uploadButton' : {
          visibility : "visible"
        },
      },
    },
    uploadButton : {
      visibility : "collapse",
      position : "relative",
      left : 70,
      bottom : 220,
      backgroundColor : "white",
      margin : theme.spacing(0,10),
      "&:hover" : {
        visibility : "visible"
      },
    },
    imageContainer : {
      display : "flex",
      flexDirection : "row",
      maxWidth : 380,
    },
    smallImage : {
      width : 100,
      maxWidth : 100,
      height : 80,
      border : "1px solid black",
      margin : theme.spacing(1)
    },
    root :{
      '& .MuiTextField-root': {
      margin: theme.spacing(2,0),
      width: '40ch',
    },
    },
    details : {
      display : "flex",
      flexDirection : "column",
  }

  }));

  const classes = useStyle();
  const [titleImage , setTitleImage] = useState(require("./static/images/default-shoe.png").default);
  const [imageArray,setImageArray] = useState([]);
  const categoryMenu = ["SHOES","SLIPPERS"];
  const [detail,setDetail] = useState({
    category : "",
    name : "",
    description : "",
    sizeAvailable : [],
    price : "",
    dis_price : ""
  })



  function handleImageChange(e){
    var files = e.target.files;
    var filesArray = [].slice.call(files);
    filesArray.forEach(e => {
    console.log(e.name);
    setTitleImage(require("./static/images/"+e.name).default)
  });
  }

  function handleSmallImageChange(e){
    var files = e.target.files;
    var filesArray = [].slice.call(files);
    filesArray.forEach(e => {
    console.log(e.name);
    console.log(imageArray);
    setImageArray([...imageArray,e.name])
  });
  }

  function handleDetailChange(e){
    const {name ,value } = e.target;
    setDetail(prev =>{
      return {
        ...prev,
        [name]:value
      }
    });
  }

  function handleSubmit(event) {
      event.preventDefault();
      console.log(detail);

  }

  return (

    <Grid container spacing={5} direction="row" className={classes.body}>
      <Grid item >
         <CardMedia
           className = {classes.image}
           // eslint-disable-next-line
           image = {titleImage}
           title="Paella dish"
         />
         <Button
            variant="contained"
            component="label"
            className = {classes.uploadButton}
         >
           <PhotoCameraSharpIcon fontSize="large"/>
           <input
             type="file"
             hidden
             accept = "image/jpeg ,image/jpg ,image/png "
             onChange = {handleImageChange}
           />
          </Button>
          <Grid container className={classes.imageContainer}>
            <img src={titleImage} className = {classes.smallImage} />
            {imageArray.map(image => {
               return <img src={require("./static/images/"+image).default} className={classes.smallImage} />
            })}

            <Button component="label" className={classes.smallImage}>
              <WallpaperIcon />
              <input
                type="file"
                hidden
                accept = "image/jpeg ,image/jpg ,image/png "
                onChange = {handleSmallImageChange}
              />
             </Button>
          </ Grid>
     </ Grid>


     <Grid item>

       <form className={classes.root} validate="true" autoComplete="off" onSubmit={handleSubmit}>
       <div className={classes.details}>
        <TextField
          required
          select
          name = "category"
          label="Select Category"
          value={detail.category}
          onChange={handleDetailChange}
        >
          {categoryMenu.map((menu) => (
            <MenuItem value={menu}>
            {menu}
           </MenuItem>
          ))}
        </TextField>


        <TextField
          label= "NAME"
          name="name"
          value= {detail.name}
          onChange={handleDetailChange}
          required
        />
        <TextField
          name = "description"
          label="DESCRIPTION"
          value={detail.description}
          onChange={handleDetailChange}
          multiline
          maxRows={2}
          inputProps={{ maxLength: 50 }}
          required
        />
        <TextField
          type ="number"
          label="ORIGINAL PRICE"
          inputProps={{ min: 0 }}
          required
        />
        <TextField
          type ="number"
          label="DISCOUNTED PRICE"
          inputProps={{ min: 0 }}
        />

        <input type="submit" value="submit" />
        </div>
       </ form>


     </ Grid>

   </ Grid>
 );

}

export default Practise;
