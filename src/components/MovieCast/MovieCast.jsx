import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovieCredits } from "../../filmService";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <>
    
    {isLoading && <b>Loading...</b>}
    {error && <b>Error...</b>}
    {cast && (
        <div className={css.container}>
          {cast.map((actor) => (
            <div key={actor.cast_id} className={css.card}>
              <img
                src={ `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                }
                alt={actor.name}
                className={css.image}
              />
              <h4 className={css.name}>{actor.name}</h4>
              <p className={css.character}>{actor.character}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
