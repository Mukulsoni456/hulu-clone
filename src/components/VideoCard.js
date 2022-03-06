import React from 'react'
import './videoCard.css'
import videoTile from '../hulu-assets/videoTile.jpg'
import Truncate from 'react-truncate'


function VideoCard({movie}) {

    const baseURL = 'https://image.tmdb.org/t/p/original/'
    return (
        <div className='card_container'> 
            <img src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}></img>
            <div className='video_details'>
                <Truncate className='Movie_overview' lines={1} ellipsis={<span>...</span>}>{movie.overview}</Truncate>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default VideoCard
