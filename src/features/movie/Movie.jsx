import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import axios from 'axios'
function Movie() {
  const {id} = useParams()
  const [movie, setmovie] = useState({})

  useEffect(() =>{
    axios.get('http://www.omdbapi.com/?apikey=b0b6c3fb&i=' + id)
    .then((res) =>{
      console.log(res)
      setmovie(res.data)
    })
  },[])

  const navigate = useNavigate()

  
  if(movie.Title == undefined){
    return (<div className='bg-rose-500 h-screen flex justify-center items-center font-bold text-white text-3xl'>Movie was not found!</div>)
  }
  return (
    <main className='h-screen flex flex-col gap-6 p-10' style={{
      backgroundImage: `url(${movie.Poster})`,
      backgroundSize: 'cover'

    }}>
      <section className='h-7/10 flex gap-6'>
        <div className='w-3/10 p-10 flex flex-col gap-5 bg-[#2e2d2d50] backdrop-blur-sm rounded-2xl'>
        <h1 className='text-4xl font-bold text-blue-200'>{movie.Title}</h1>
        <h1 className='text-3xl text-rose-400'>{movie.imdbRating} IMBD</h1>
        <h1 className='text-2xl text-blue-400'>{movie.Genre}</h1>
        <p className='text-gray-300'>{movie.Plot}</p>
        </div>
        <div className='w-7/10 p-10 bg-[#2e2d2d50] backdrop-blur-sm rounded-2xl'>
          <video src={movie.src} controls className='w-full h-full' >
            
          </video>
        </div>
      </section>
      <section className='h-3/10 flex p-4 gap-4 bg-[#2e2d2d50] backdrop-blur-sm rounded-2xl' >
      <div>
        <img className='h-full' src={movie.Poster} />
      </div>
      <div>
        <img className='h-full' src={movie.Poster} />
      </div>
      </section>
      <button onClick={() =>{
        navigate('/')
      }} className='bg-slate-700 w-40 h-10 rounded-xl text-white ml-3 absolute top-100'>Go back</button>
    </main>
  )
}

export default Movie