import React from 'react'
import VideoCard from './VideoCard'
import { useState } from 'react'
import { useEffect } from 'react'
import Axios from '../Axios'
import './cards.css'
import FlipMove from 'react-flip-move'
import requests from '../requests'


const API_KEY = 'c0cec75d56b038231955969de48a4fbb'

export default function Cards({selectedOption}) {

    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const request = await Axios.get(selectedOption);            
            setMovies(request.data.results)
            return request
        }


        fetchMovies()
    }, [Movies])
    return (
        <div className='cards_container'>
            <FlipMove>
            {
                Movies.map(movie=>{
                    return <VideoCard  key={movie.id} movie ={movie}></VideoCard>
                })
            }
            </FlipMove>
        </div>
    )
}
