import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

// Define the styles for the UI components using the makeStyles hook from Material UI
const useStyles = makeStyles((theme) => ({
   root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchInput: {
    marginRight: theme.spacing(1),
  },
  searchButton: {
    backgroundColor: "#3f51b5",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#ffc752",
      color: "#000",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    opacity: 0.9,
    backgroundColor: "#f2f2f2",
    border: "1px solid #e6e6e6",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 0.5s",
    "&:hover": {
      backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/846/707/722/star-wars-x-wing-minimalism-ship-in-a-bottle-wallpaper-thumb.jpg')`,
      backdropFilter: "blur(10px)",
      color: "#f2f2f2",
    },
  },
  objectName: {
    color: "#ffbf00",
    fontWeight: "bold",
  },
}));

const Starships = () => {
  // Define the state for the starships array using the useState hook
  const [starships, setStarships] = useState([]);

  // Fetch the starships data using Axios and update the state using the useEffect hook
  useEffect(() => {
    axios.get("http://localhost:8000/api/starships")
      .then(res => {
        setStarships(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // Use the styles defined above using the useStyles hook
  const classes = useStyles();

  // Render the component, displaying the list of starships
  return (
    <div>
      <Typography variant="h2" className={classes.title}>
        Starships
      </Typography>
      <Grid container spacing={3}>
        {starships.map(starship => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={starship.name} >
            <Paper elevation={8} className={classes.paper}>
            <Typography variant="h5" gutterBottom className={classes.objectName}>
                {starship.name}
              </Typography>
              <p> Model: {starship.model} </p>
              <p> Manufacturer: {starship.manufacturer} </p>
              <p> Starship Class: {starship.starship_class}</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Starships;
