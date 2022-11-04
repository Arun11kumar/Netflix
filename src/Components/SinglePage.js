import React, { useEffect, useState } from 'react'
import { useParams, } from 'react-router-dom'
import { API_URL } from './context'
import { NavLink } from 'react-router-dom'


const SinglePage = () => {

  const { id } = useParams()
  const [isLoading, setLoading] = useState(true)
  const [movie, setMovie] = useState('')




  const fatchMovies = async (url) => {
    setLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      if (data.Response === "True") {
        setLoading(false)
        setMovie(data)
      }
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    let TimeOut = setTimeout(() => {
      fatchMovies(`${API_URL}&i=${id}`)
    }, 3000)
    return () => clearTimeout(TimeOut)
  }, [id])


  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    )
  }
  return (
<div className='mainSingle'>
    <section className='movie-section'>
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
      </div>

      <div className="card-content">
        <p className='title'>{movie.Title}</p>
        <p className='Reles'>{movie.Released}</p>
        <p className='Genre'>{movie.Genre}</p>
        <p className='imdb'>{movie.imdbRating}</p>
        <p className='Country'>{movie.Country}</p>
        <NavLink to="/" >
          <button className='btngo' >Go Back</button>
        </NavLink>
      </div>
    </section>

</div>

  )
}

export default SinglePage
