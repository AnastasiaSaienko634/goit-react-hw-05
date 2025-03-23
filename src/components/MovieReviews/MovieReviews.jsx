import { useEffect, useState } from "react";
import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../api";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function loadReviews() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadReviews();
  }, [movieId]);
  return (
    <>
      {loading && <p>Loading, please wait...</p>}
      {error && <p>Whoops, something went wrong. Please try again later!</p>}
      <ul className={css.reviewList}>
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id} className={css.item}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have reviews for this movie.</p>
        )}
      </ul>
    </>
  );
}
