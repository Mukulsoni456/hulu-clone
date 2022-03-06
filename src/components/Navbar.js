import React from 'react'
import requests from '../requests'
import './navbar.css'

function Navbar({setselectedOption}) {
    return (
        <div className='categories'>
            <h2 onClick={()=>{setselectedOption(requests.fetchTrending)}}>Trending</h2>
            <h2 onClick={()=>{setselectedOption(requests.fetchTopRated)}}>Top Rated</h2>
            <h2 onClick={()=>{setselectedOption(requests.fetchtrendingmovies)}}>Trending Movies</h2>
            <h2 onClick={()=>{setselectedOption(requests.fetchActionMovies)}}>Action Movies</h2>
            <h2 onClick={()=>{setselectedOption(requests.fetchAnimation)}}>Animation</h2>
            <h2 onClick={()=>{setselectedOption(requests.fetchComedyMovies)}}>Comedy Movies</h2>
            <h2 onClick={()=>{setselectedOption(requests.fetchHorrorMovies)}}>Horror Movies</h2>
            <h2 onClick={()=>{setselectedOption(requests.fetchMystery)}}>Mystery</h2>
            <h2 onClick={()=>{setselectedOption(requests.fetchRomanceMovies)}}>Romantic Movies</h2>
            <h2 onClick={()=>{setselectedOption(requests.fetchSciFi)}}>SciFi</h2>
            <h2 onClick={()=>{setselectedOption(requests.fetchWestern)}}>Western Movies</h2>
        </div>
    )
}

export default Navbar
