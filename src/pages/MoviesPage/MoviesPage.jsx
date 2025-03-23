import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";
import { fetchMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import { IoIosSearch } from "react-icons/io";

export default function MoviePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const setParam = () => {
    searchParams.set("query", query);
    setSearchParams(searchParams);
  };
  useEffect(() => {
    const savedItems = localStorage.getItem("movies");
    if (savedItems) {
      setMovies(JSON.parse(savedItems));
    }
  }, []);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      setError(false);
      const form = event.target;
      const query = form.elements.query.value.trim();
      if (!query) return;
      setSearchQuery(query);
      setLoading(true);
      const data = await fetchMovies(searchQuery);
      localStorage.setItem("movies", JSON.stringify(data));
      setMovies(data);
      setSearchParams({ query });
      setSearchQuery("");
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onChangeForm = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmitForm} className={css.form}>
        <button className={css.buttonSearch}>
          <IoIosSearch className={css.iconss} />
          Search
        </button>
        <input
          className={css.search}
          name="query"
          value={searchQuery}
          onChange={onChangeForm}
          placeholder="Search here your movie..."
        />
        {loading && <p>Loading Wait please...</p>}
        {movies.length === 0 && <p>Sorry, we have nothing found</p>}
        <MovieList movies={movies} />
      </form>
    </>
  );
}
