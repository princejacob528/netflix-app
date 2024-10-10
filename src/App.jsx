import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/banner";
import RowPost from "./components/RowPost/RowPost";
import { baseUrl, API_KEY } from "./constants/constants";

function App() {
    const items = [
    {
      title: "NETFLIX ORGINALS",
      link: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
      title: 'Trending Movies',
      link: `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    {
      title: 'Action Movies',
      link: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    {
      title: 'Comedy Movies',
      link: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    {
      title: 'Horror Movies',
      link: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    {
      title: 'Romance Movies',
      link: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    {
      title: 'Documentaries',
      link: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`
    }
  ];
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <div className="base">
        {items.map((item, index) => (
          <RowPost title={item.title} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default App;
