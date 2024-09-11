import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";

function Banner() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [index, setIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `trending/all/week?api_key=${API_KEY}&language=en-US`
        );
        setMovies(response.data.results);
        setMovie(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching the movies:", error);
      }
    };

    fetchMovies();
  }, [API_KEY]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % movies.length;
          const newMovie = movies[newIndex];
          setMovie(newMovie);
          setFadeClass("fade-in");
          return newIndex;
        });
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [movies]);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className={`content ${fadeClass}`}>
        <h1 className="title">
          {movie ? (movie.name ? movie.name : movie.title) : ""}
        </h1>
        <div className="banner-btns">
          <button className="btn"><i className="fas fa-soild fa-play" />   Play</button>
          <button className="btn"><i className="fas fa-soild fa-bars" />   My List</button>
          {console.log(movie ? movie : "Not id")}
        </div>
        <p className="description">{movie ? movie.overview : ""}</p>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
