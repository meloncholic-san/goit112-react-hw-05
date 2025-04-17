import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "../filmService"
import MovieList from "../components/MovieList/MovieList";



export default function HomePage() {
    const [trendingMovies, setTrendingMovies] =useState([]);

    useEffect(() => {
        async function getTrendingMovies() {
            try {
                const data = await fetchTrendingMovies();
                console.log(data)
                setTrendingMovies(data);
            }
            catch {}
        }

        getTrendingMovies();
    }, []);//useEffect немає залежностей, а також маємо лише один запит при монтуванні

    return (
        <>
        <h1>Trending Today:</h1>
        <MovieList movies={trendingMovies}/>
        </>

    )
}
