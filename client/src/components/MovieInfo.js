import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function MovieInfo({ movieData }) {
  const date = new Date(movieData[4]);
  const releaseDate = date.toISOString().substring(0, 10);

  return (
    <Grid item xs={12} sm={5} md={7} container>
      {movieData[3] === null ? (
        <div></div>
      ) : (
        <div>
          <Typography variant="h6">Synopsis</Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {movieData[3]}
          </Typography>
        </div>
      )}
      <Grid item xs container direction="row" spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="overline">
            Release date: {releaseDate}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="overline">
            Duration: {movieData[5]} min
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
