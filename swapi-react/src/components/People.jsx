import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

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
      backgroundImage: `url('https://laughingsquid.com/wp-content/uploads/2014/07/Star_wars_longshadow-02.png')`,
      backdropFilter: "blur(10px)",
      color: "#f2f2f2",

    },
  },
  objectName: {
    color: "#ffbf00",
    fontWeight: "bold",
  },
}));


const People = () => {
  const classes = useStyles();
  const [people, setPeople] = useState([]);
  const [searchName, setSearchName] = useState("");

  const handleSearch = () => {
    let url = "http://localhost:8000/api/people";

    if (searchName) {
      url += `/?q=${searchName}`;
    }

    axios
      .get(url)
      .then((res) => {
        setPeople(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Call handleSearch when the searchName state changes
  useEffect(() => {
    handleSearch();
  }, [searchName]);

  return (
    <div>
      <Typography variant="h2" className={classes.title}>
        People
      </Typography>
      {/* Search bar that refreshes the search based on what is written */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.searchBar}>
              <TextField
                label="Search by name"
                variant="standard"
                className={classes.searchInput}
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
              <Button variant="contained" className={classes.searchButton} onClick={handleSearch}>
                Search
              </Button>
            </div>
          </Paper>
        </Grid>

        {/* Map through the people array and display their information */}
        {people.map((person) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={person.name}>
            <Paper elevation={8} className={classes.paper}>
              <Typography variant="h5" gutterBottom className={classes.objectName}>
                {person.name}
              </Typography>
              <p>Height: {person.height} cm</p>
              <p>Mass: {person.mass} kg</p>
              <p>Birth Year: {person.birth_year}</p>
              <Button color="secondary" variant="contained" href={person.homeworld}>
                Homeworld
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default People;
