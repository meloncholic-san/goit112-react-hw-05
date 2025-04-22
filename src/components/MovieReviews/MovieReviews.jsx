import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovieReviews } from "../../filmService";
import css from "./MovieReviews.module.css";

export default function MovieReview() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
        {isLoading && <b>Loading...</b>}
        {error && <b>Error...</b>}
        {reviews && reviews.length > 0 ? (
        <div className={css.container}>
          {reviews.map((review) => (
            <div key={review.id} className={css.card}>
              <h4 className={css.name}>Author: {review.author}</h4>
              <p className={css.character}>{review.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews found.</p>
      )}
    </>
  );
}
