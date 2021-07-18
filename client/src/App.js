import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TableMovies from "./components/TableMovies";
import FetchData from "./api/Fetch";
import GenerateColumns from "./functions/GenerateColumns";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <TableMovies
          fetchData={FetchData()}
          generateColumns={GenerateColumns()}
        />
      </Container>
    </React.Fragment>
  );
}
