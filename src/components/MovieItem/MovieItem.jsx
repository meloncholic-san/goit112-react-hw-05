// import { Link, useLocation } from "react-router";

// export default function MovieItem ({movie}) {

//     const location = useLocation();
//     return (
//         <Link
//         to={`/movies/${movie.id}`}
//         state={{ previousLocation: location }}
//         > 
//         {movie.title}
//         </Link>
//     )
// }

import { Link, useLocation } from "react-router";

export default function MovieItem({ movie }) {
  const location = useLocation();

  return (
    <Link
      to={`/movies/${movie.id}`}
      state={location}
    >
      {movie.title}
    </Link>
  );
}
