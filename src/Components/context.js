import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()
export  const API_URL= `http://www.omdbapi.com/?apikey=43033444`
const AppProvider=({children})=>{
 
    const [isLoading,setLoading]= useState(true)
    const [movie,setMovie]=useState([])
    const [isError,setIsError]=useState({show:"false",msg: ""})
    const [query,setQuery]=useState("titanic")

    const fatchMovies = async(url) => {
       try{
        const res =await fetch(url)
        const data =await res.json()
            console.log(data)
            if(data.Response==="True"){
                setLoading(false)
                setMovie(data.Search)
            }else{
                setIsError({
                    show:true,
                    msg:data.error,
                })
                }
            } catch(error){
                console.log(error);
          
          }
      }

    useEffect(()=>{
     let TimeOut=setTimeout(()=>{
            fatchMovies(`${API_URL}&s=${query}`)
        },800)
       return() =>clearTimeout(TimeOut)
    },[query])

   return <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>{children}</AppContext.Provider>
}
 
const useGlobalContext =()=>{
    return useContext(AppContext)
}

export  {AppContext,AppProvider,useGlobalContext}
