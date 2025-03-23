import css from "./HomePage.module.css";
import { fetchTrendingMovies } from "../../api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [trandingMovie, setTrandingMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchingTrandingMovie() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchTrendingMovies();
        setTrandingMovie(data.results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchingTrandingMovie();
  }, []);
  return (
    <>
      <h1 className={css.title}>Trending Today</h1>
      {error && <p>Whoops something wrong, please reset webSite!</p>}
      {loading && <p>Loading please wait...</p>}
      {trandingMovie.length > 0 && <MovieList movies={trandingMovie} />}
    </>
  );
}
