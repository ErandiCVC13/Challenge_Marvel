import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TableMovies from "./componets/tableMovies";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <TableMovies />
      </Container>
    </React.Fragment>
  );
}
