import React from 'react'
import {NavLink} from "react-router-dom"
import { useGlobalContext } from './context'

const Movies = () => {

    const {movie}= useGlobalContext()
  return (
    <section className='movie-page'>
       <div className='s' >
       {
        movie.map((curMovie)=>{
          
            const {Title,Poster,imdbID,Year}=curMovie
            const movieName=Title.substring(0,15)

            return (
                <NavLink to={`movie/${imdbID}`}>
                <div className="card">
                <img src={Poster} alt="" width="200px "/>
               <div className="card-body">
                 <p>{Year}</p>
                 <h5 className='title'>{movieName.length >=15 ? `${movieName}...`: movieName}</h5>
               </div>
              </div>
                </NavLink>
            )
        })
       }
       </div>
    </section>
  )
}

export default Movies
