import React, { useEffect } from 'react'
import MovieCards from './MovieCards'
import { useState } from 'react'
import axios from 'axios'
function Home() {
  const [movie, setMovies] = useState([])
  const [searchText, setSearchText] = useState('')
  useEffect(() => {
    axios
      .get('https://www.omdbapi.com/?apikey=b0b6c3fb&s=dragons')
      .then(res => {
        setMovies(res.data?.Search)
      })
  }, [])
  return (
    <main className='h-screen flex flex-col p-10 gap-4' style={{
      backgroundImage: 'url(/images/1.jpg)',
      backgroundSize: 'cover'
    }}>
      <header className='h-2/10 bg-[#403d3d48] backdrop-blur-2xl rounded-xl gap-4 flex justify-center items-center'>
        <input type="text" placeholder='Search Movie...' value={searchText} onChange={(e) => setSearchText(e.target.value)} className='p-4 bg-red-400 text-lg w-80 outline-none text-white focus:bg-red-500 rounded-xl' />
        <button className='p-4 rounded-xl bg-rose-500 text-white active:bg-rose-400 font-bold hover:cursor-pointer' onClick={() => {
          axios
            .get('https://www.omdbapi.com/?apikey=b0b6c3fb&s=' + searchText)
            .then((res) => {
              setMovies(res.data.Search)
            })
        }}>Search</button>
      </header>
      <div className='h-10/12 overflow-auto gap-5 p-4 grid grid-cols-5 rounded-xl'>
        {movie.map((data) => {
          return <MovieCards data={data} />

        })}
      </div>
    </main>
  )
}

export default Home