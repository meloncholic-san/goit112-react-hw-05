import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import AppHeader from '../AppHeader/AppHeader';
import NotFoundPage from '../../pages/NotFoundPage';
import css from './App.module.css';


const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'))
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'))
const MovieCast = lazy(() => import('../MovieCast/MovieCast'))
const MovieReview = lazy(() => import('../MovieReview/MovieReview'))

export default function App() {
  return (
    <div className={css.container}>
      <AppHeader />

      <Suspense
        fallback={
          <p>
            <b>Loading page...</b>
          </p>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/movies'element = {<MoviesPage />}/>
          <Route path='/movies/:movieId' element= {<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="review" element={<MovieReview />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
