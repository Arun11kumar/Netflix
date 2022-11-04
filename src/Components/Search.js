import React from 'react'
import { useGlobalContext } from './context'
import log from "./Pages/Image/ZiClJf-1920w.jpg"
import log1 from "./Pages/Image/logo (1).png"
import './Pages/navber.css'
const Search = () => {
  const {query,setQuery,isError} = useGlobalContext()
  return (
    <div>

    <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={log1} alt=""  className='log1'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-1 mb-lg-0">
      <a href=""><img src={log} alt="" className='logo' />
      </a>
      </ul>
      <form className="d-flex" onSubmit={(e)=>e.preventDefault()}  role="search">
        <input className="form-control me-2" type="search"  value={query} 
        onChange={(e)=>setQuery(e.target.value)} placeholder="Search" aria-label="Search"/>
       
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Search
