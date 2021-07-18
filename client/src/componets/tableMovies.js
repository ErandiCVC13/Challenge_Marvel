import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MUIDataTable from "mui-datatables";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";

export default function Controlled() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    large: {
      width: theme.spacing(30),
      height: theme.spacing(35),
    },
    progress: {
      display: "flex",
      width: "100%",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    },
  }));

  const classes = useStyles();

  const listColumnsNames = [
    "Title",
    "Chronology",
    "Cover_url",
    "Overview",
    "Release_date",
    "Duration",
  ];

  const generateColumns = (listColumnsNames) => {
    const columns = [];
    listColumnsNames.forEach((elem) => {
      if (elem === "Title" || elem === "Chronology") {
        columns.push({
          name: elem.toLowerCase(),
          label: elem,
          options: {
            filter: true,
            sort: true,
          },
        });
      } else {
        columns.push({
          name: elem.toLowerCase(),
          label: elem,
          options: {
            filter: false,
            sort: true,
            display: "excluded",
          },
        });
      }
    });

    return columns;
  };

  const columns = generateColumns(listColumnsNames);

  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("http://localhost:8080/movies");
      setMovies(res.data);
      setIsLoading(false);
    } catch (e) {
      console.log("Error!", e);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const data = Object.values(movies);

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    selectableRows: "none",
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,

    renderExpandableRow: (rowData) => {
      const colSpan = rowData.length + 1;
      console.log(rowData);
      return (
        <TableRow>
          <TableCell colSpan={colSpan}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid
                  container
                  xs={12}
                  sm={6}
                  md={4}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Paper className={classes.paper}>
                    <Avatar
                      alt={rowData.title}
                      variant="rounded"
                      className={(classes.rounded, classes.large)}
                      src={rowData[2]}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={5} md={7} container>
                  {rowData[3] === null ? (
                    <div></div>
                  ) : (
                    <div>
                      <Typography variant="h6">Synopsis</Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="p"
                      >
                        {rowData[3]}
                      </Typography>
                    </div>
                  )}
                  <Grid item xs container direction="row" spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="overline">
                        Release date: {rowData[4]}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="overline">
                        Duration: {rowData[5]} min
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </TableCell>
        </TableRow>
      );
    },
  };

  return (
    <div>
      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      ) : (
        <MUIDataTable
          title={"Marvel Movies"}
          data={data}
          columns={columns}
          options={options}
        />
      )}
    </div>
  );
}
