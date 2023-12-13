import React, { useEffect, useState } from 'react'
import "./otherCss.scss"
import axios from 'axios'

let apikey = "4f44db2618be07ac80bbe5e42bcb72c4";
let url = "https://api.themoviedb.org/3";
let imgurl = "https://image.tmdb.org/t/p/original/";
let popular = "popular";

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
            <Card key={index} img={`${imgurl}/${item.poster_path}`}/>
          )
        })
      }
    
    </div>

  </div>
  )
}

const MyList = () => {

  let [popularMovies,setpopularMovies] = useState([]);

  useEffect(() => {

    const fetchpopular = async()=>{
      const {data : {results}} = await  axios.get(`${url}/movie/${popular}?api_key=${apikey}`);
      setpopularMovies(results);
      };
      fetchpopular();
  },[])
  

  return (
    <div>
      <Row title={"Recently Added"} arr={popularMovies} />
    </div>
  )
}

export default MyList