import { Suspense, useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams} from "react-router";
import { fetchMovieById } from "../filmService";

import css from './MovieDetailsPage.module.css';//Де створювати файл стилів, якщо це сторінка
                                                //а не компонент? pages/movieDetailePage/jsx та module.css?


export default function MovieDetailsPage() {
    const location = useLocation();
    const backLinkRef = useRef(location.state ?? "/movies");
    const { movieId } = useParams();
    const [movieDetail, setMovieDetail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

  useEffect(()=>{
    async function getMovieDetails() {
        try {
            setIsLoading(true);
            setError(false);
            const data = await fetchMovieById(movieId);
            setMovieDetail(data);
        }
        catch {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }

    getMovieDetails();
  },[movieId])

      useEffect(() => {
        console.log(movieDetail);
    }, [movieDetail]); 

  return (
    <>
    <Link to={backLinkRef.current} className={css.goBackBtn}>
    ← Go back
    </Link>
    {isLoading && <b>Loading...</b>}
    {error && <b>Error...</b>}
    {movieDetail && 
    <div className={css.container}>
        <img
        src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
        alt={movieDetail.title}
        style={{ width: "200px", height: "auto", borderRadius: "10px" }}
        />
        <div>
            <h2>{movieDetail.title}</h2>
            <p>User Score: {(movieDetail.vote_average * 10).toFixed(1)}%</p>
            <p><strong>Overview:</strong> <span>{movieDetail.overview}</span></p>
            <p><strong>Genres:</strong> {movieDetail.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
    
    </div>}

    <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="review">Reviews</NavLink>
        </li>
      </ul>

        <Suspense fallback = {<div>Loading data...</div>}>
        <Outlet />
        </Suspense>
    </>
  );
}
