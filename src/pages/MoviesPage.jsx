import { useEffect, useState } from "react"
import { fetchMoviesByQuery, fetchTrendingMovies } from "../filmService"
import { useSearchParams } from "react-router"
import { useDebounce } from "use-debounce";
import MovieList from "../components/MovieList/MovieList";

export default function MoviesPage () {

    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const [debouncedQuery] = useDebounce(query, 300);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const changeSearchText = (event) => {
        const nextParams = new URLSearchParams(searchParams);

        if (event.target.value !== '') {
            nextParams.set('query', event.target.value)
        }   else {
            nextParams.delete('query');
        }

        setSearchParams(nextParams);
    }


    useEffect(() => {
        async function  getMoviesByQuery() {
            try {
                setIsLoading(true);
                setError(false);
                const data = await fetchMoviesByQuery(debouncedQuery);
                setMovies(data);
            }
            catch {
                setError(true);
            }   finally {
                setIsLoading(false);
              }
        }
        getMoviesByQuery();
    },[debouncedQuery])

    return (
        <>
        <input type="text" value={query} onChange={changeSearchText} />
        {isLoading && <b>Loading movies...</b>}
        {error && <b>Whoops there was an error, please reload the page...</b>}
        {movies.length > 0 && <MovieList movies={movies} />}

        </>
    )
}