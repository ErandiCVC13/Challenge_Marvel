import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function Poster({ posterImage }) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    large: {
      width: theme.spacing(30),
      height: theme.spacing(35),
    },
  }));

  const classes = useStyles();
  return (
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
          alt="Movie poster"
          variant="rounded"
          className={(classes.rounded, classes.large)}
          src={posterImage}
        />
      </Paper>
    </Grid>
  );
}
