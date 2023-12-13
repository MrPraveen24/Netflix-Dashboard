import React, { useEffect, useState } from 'react'
import "./otherCss.scss"
import axios from 'axios'

let apikey = "4f44db2618be07ac80bbe5e42bcb72c4";
let url = "https://api.themoviedb.org/3";
let imgurl = "https://image.tmdb.org/t/p/original/";
let top_rated = "top_rated";

let Card = ({img}) => {
  return(
    <img className='card' src={img} alt="cover" />
  )
}

let Row = ({title, arr=[] }) =>{
  return(
    <div className='newRow'>
    <h2>{title}</h2>
    <div>
      {
        arr.map((item,index)=>{
          return(
            <Card key={index + 5} img={`${imgurl}/${item.poster_path}`}/>
          )
        })
      }
    
    </div>

  </div>
  )
}

const MyList = () => {

  let [topRaterdMovies,settopRaterdMovies] = useState([]);

  useEffect(() => {

    const fetchtop_rated = async()=>{
      const {data : {results}} = await  axios.get(`${url}/movie/${top_rated}?api_key=${apikey}`);
      settopRaterdMovies(results);
      };
      fetchtop_rated();
  },[])
  

  return (
    <div>
      <Row title={"My List"} arr={topRaterdMovies} />
    </div>
  )
}

export default MyList