import React from 'react'
import Movies from './Movies'
import  Search  from './Search'
import Hader from './Pages/Header'

const Home = () => {
  
  return (
    <div>
      <Search/>
      <Hader/>
      <Movies/>
    </div>
  )
}

export default Home
