import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from 'axios'
import './Banner.css'
function Banner() {
    const [Movie, setMovie] = useState()
    useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
        console.log(Response.data.results[0])
        setMovie(Response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
    })
    }, [])

  return (
    <div 
    style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{Movie ? Movie.title ? Movie.title : Movie.name : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{Movie ? Movie.overview:"" }</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner