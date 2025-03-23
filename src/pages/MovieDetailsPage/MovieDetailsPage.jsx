import { Outlet, useParams, NavLink, Link } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../api";
import { IoIosArrowBack } from "react-icons/io";
import { LuMessageSquareMore } from "react-icons/lu";
import { TiArrowSortedUp } from "react-icons/ti";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const backLinkHref = useRef(location.state);

  useEffect(() => {
    async function fecthMoreInfo() {
      try {
        setMovieInfo([]);
        setError(false);
        setLoading(true);
        const data = await fetchMovieDetails(movieId);
        setMovieInfo(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fecthMoreInfo();
  }, [movieId]);
  return (
    <>
      {loading && <p>Loading, please wait...</p>}
      <Link className={css.linkGoBack} to={backLinkHref.current}>
        <IoIosArrowBack className={css.icons} />
        Go back
      </Link>
      {error && (
        <div>Whoops, something went wrong. Please try again later!</div>
      )}
      {movieInfo.length === 0 && (
        <p>Sorry now we don't have information about this movie.</p>
      )}
      <div className={css.container}>
        <div className={css.imgContainer}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt={movieInfo.title}
          />
        </div>
        <div className={css.textContainer}>
          <h1 className={css.title}>{movieInfo.title}</h1>
          <h2 className={css.titleName}>User score:</h2>
          <p>{movieInfo.vote_average}%</p>
          <h2 className={css.titleName}>Overview</h2>
          <p className={css.overview}>{movieInfo.overview}</p>
          <h2 className={css.titleName}>Genres</h2>
          <div>
            {movieInfo.genres && movieInfo.genres.length > 0 ? (
              movieInfo.genres.map((g) => g.name).join(", ")
            ) : (
              <span>No genres available</span>
            )}
          </div>
        </div>
      </div>
      <h2 className={css.additionalText}>
        <LuMessageSquareMore className={css.iconss} /> Additional Information:
        <nav className={css.links}>
          <NavLink to="cast" className={css.link}>
            <TiArrowSortedUp className={css.iconss} /> Cast
          </NavLink>
          <NavLink to="reviews" className={css.link}>
            <TiArrowSortedUp className={css.iconss} /> Review
          </NavLink>
        </nav>
      </h2>
      <Outlet />
    </>
  );
}
