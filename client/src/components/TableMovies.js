import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MUIDataTable from "mui-datatables";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Poster from "./Poster";
import MovieInfo from "./MovieInfo";

export default function Controlled({ fetchData, generateColumns }) {
  const useStyles = makeStyles(() => ({
    progress: {
      display: "flex",
      width: "100%",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    },
  }));

  const classes = useStyles();

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

      return (
        <TableRow>
          <TableCell colSpan={colSpan}>
            <Grid container spacing={3}>
              <Poster posterImage={rowData[2]} />
              <MovieInfo movieData={rowData} />
            </Grid>
          </TableCell>
        </TableRow>
      );
    },
  };

  return (
    <div>
      {fetchData.isLoading ? (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      ) : (
        <MUIDataTable
          title={"Marvel Movies"}
          data={fetchData.data}
          columns={generateColumns.columns}
          options={options}
        />
      )}
    </div>
  );
}
