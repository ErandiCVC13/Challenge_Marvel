import { useState, useEffect } from "react";
import axios from "axios";

export default function FetchData() {
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

  return {
    data,
    isLoading,
  };
}
