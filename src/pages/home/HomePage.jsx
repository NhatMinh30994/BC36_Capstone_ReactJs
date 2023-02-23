import React from "react";
import CarouselMovies from "./components/carousel/CarouselMovies";
import MovieList from "./components/movie-list/MovieList";
import News from "./components/news/News";

import Test from "./components/test/Test";

export default function HomePage() {
  return (
    <div className="">
      <CarouselMovies/>
      <MovieList/>
      <News/>
    </div>
  );
}
