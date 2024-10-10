import React, { useEffect, useRef, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl } from "../../constants/constants";

function RowPost({ title, link }) {

  const posterRef = useRef(null);
  const handleWheel = (event) => {
    event.preventDefault();
    posterRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    if (posterRef.current) {
      posterRef.current.addEventListener('wheel', handleWheel);
      
    }
    // Clean up the event listener when the component is unmounted
    return () => {
      if (posterRef.current) {
        posterRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState();
  useEffect(() => {
    axios
      .get(`${link}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, []);

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="posters"  ref={posterRef}>
        {title === "NETFLIX ORGINALS"
          ? movies.map((value) => (
              <div className="sub-posters">
                <img
                  className="big-poster"
                  src={imageUrl + value.backdrop_path}
                  alt="banner"
                />
                <p>{value ? (value.name ? value.name : value.title) : ""}</p>
              </div>
            ))
          : movies.map((value) => (
              <div className="sub-posters">
                <img
                  className="poster"
                  src={imageUrl + value.poster_path}
                  alt="Poster"
                />
              </div>
            ))}
      </div>
    </div>
  );
}

export default RowPost;
