import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MUIDataTable from "mui-datatables";

export default function Controlled() {
  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(30),
      height: theme.spacing(35),
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

  const fetchMovies = async () => {
    try {
      const res = await axios.get("http://localhost:8080/movies");
      setMovies(res.data);
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
            <Avatar
              alt={rowData.title}
              variant="rounded"
              className={(classes.rounded, classes.large)}
              src={rowData[2]}
            />
            <Typography className={classes.heading}>{rowData[3]}</Typography>
            <Typography className={classes.heading}>{rowData[4]}</Typography>
            <Typography className={classes.heading}>{rowData[5]}</Typography>
          </TableCell>
        </TableRow>
      );
    },
  };

  return (
    <MUIDataTable
      title={"Marvel Movies"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}
