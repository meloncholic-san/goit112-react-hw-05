import MovieItem from "../MovieItem/MovieItem"

export default function MovieList({movies}) {

    return (
        <ul>
                {movies.map((movie) => {
                    return (
                    <li key={movie.id}>
                    <MovieItem movie = {movie}/>
                    </li>
                    )
                })}
        </ul>
    )
}