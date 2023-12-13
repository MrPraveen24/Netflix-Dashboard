import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'

let apikey = "4f44db2618be07ac80bbe5e42bcb72c4";
let url = "https://api.themoviedb.org/3";
let imgurl = "https://image.tmdb.org/t/p/original/";
let upcoming = "upcoming";
let popular = "popular";
let now_playing = "now_playing";
let top_rated = "top_rated";

let Card = ({img}) => {
  return(
    <img className='card' src={img} alt="cover" />
  )
}

let Row = ({title, arr=[] }) =>{
  return(
    <div className='row'>
    <h2>{title}</h2>
    <div>
      {
        arr.map((item,index)=>{
          return(
            <Card key={index} img={`${imgurl}/${item.poster_path}`}/>
          )
        })
      }
    
    </div>

  </div>
  )
}

const Home = () => {

  let [upcomingMovies,setupcomingMovies] = useState([]);
  let [popularMovies,setpopularMovies] = useState([]);
  let [nowPlayingMovies,setnowPlayingMovies] = useState([]);
  let [topRaterdMovies,settopRaterdMovies] = useState([]);

  useEffect(() => {

    const fetchUpcoming = async()=>{
    const {data : {results}} = await  axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
    setupcomingMovies(results);
    };

    const fetchpopular = async()=>{
      const {data : {results}} = await  axios.get(`${url}/movie/${popular}?api_key=${apikey}`);
      setpopularMovies(results);
      };

      const fetchnow_playing = async()=>{
        const {data : {results}} = await  axios.get(`${url}/movie/${now_playing}?api_key=${apikey}`);
        setnowPlayingMovies(results);
        };

        const fetchtop_rated = async()=>{
          const {data : {results}} = await  axios.get(`${url}/movie/${top_rated}?api_key=${apikey}`);
          settopRaterdMovies(results);
          };

    fetchUpcoming();
    fetchpopular();
    fetchnow_playing();
    fetchtop_rated();
  }, [])
  



  return (
    <section className='home'>
      <div className="banner" style={{
        backgroundImage : popularMovies[13] ? `url(${imgurl}/${popularMovies[13].poster_path})` : "none"
      }}>

      </div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Top Rated"} arr={topRaterdMovies} />
      <Row title={"Popular on Netflix"} arr={popularMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />

    </section>
  )
}

export default Home