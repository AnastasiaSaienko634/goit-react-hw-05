import { use, useEffect, useState } from "react";
import css from "./MovieCast.module.css";
import { Outlet, useParams, NavLink } from "react-router-dom";
import { fetchCast } from "../../api";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function loadCast() {
      try {
        setCast([]);
        setError(false);
        setLoading(true);
        const data = await fetchCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadCast();
  }, [movieId]);
  return (
    <>
      {loading && <p>Loading, please wait...</p>}
      {error && <p>Whoops we have some problem, please reset your WebSite!</p>}
      <ul className={css.list}>
        {cast && cast.length > 0 ? (
          cast.map((el) => (
            <li key={el.id} className={css.card}>
              <img
                className={css.porter}
                src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                alt={el.name}
              ></img>
              <h2>{el.name}</h2>
              <p>Character:{el.character}</p>
            </li>
          ))
        ) : (
          <p>We don't have information about Actors.</p>
        )}
      </ul>
    </>
  );
}
