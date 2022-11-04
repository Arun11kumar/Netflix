import axios from 'axios'
function App() {

    const [movies, setMovies] = useState([])
  
    const fatchMovies = () => {
      axios.get("http://www.omdbapi.com/?s=kabhi&apikey=43033444")
        .then((response) => {
          console.log(response)
          setMovies(response.data.Search)
        })
    }
  
    return (
      <div className="App">
        <button onClick={fatchMovies} > Fatch Moves</button>
  
        {
          movies.map((value, index) => {
            return (
              <div className='main'>
                <div className="card">
                  <img src={value.Poster} alt="" className='poster' />
                  <h3>{value.Title}</h3>
                  <h4>{value.Type}</h4>
                  <p>{value.Year}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }