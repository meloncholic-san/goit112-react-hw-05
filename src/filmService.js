import axios from 'axios';

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzk5ZjhhYjVmNjBjZmJkMGIyMDU0NGQyZGJjNTllNyIsIm5iZiI6MTc0NDkwNjg2OS4yNDEsInN1YiI6IjY4MDEyYTc1ODNjNmU1NjdjN2Q5OTVjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KKrLiPjTJx6sDZdK7YRuyj2BYR3uKbqcRMQtMOjKsVc'
      }
};

export const fetchTrendingMovies = async () => {
    const resp = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day`,
        options
    );
    return resp.data.results;
  };



export const fetchMovieById = async (id) => {
    const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        options
    );
    return resp.data;
}


export const fetchMovieCredits = async (id) => {
    const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits`,
        options
    )
    return resp.data;
}


export const fetchMovieReviews = async (id) => {
    const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews`,
        options
    )
    return resp.data;
}


export const fetchMoviesByQuery = async (query) => {
    const resp = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        options
    )
    return resp.data.results;
}
