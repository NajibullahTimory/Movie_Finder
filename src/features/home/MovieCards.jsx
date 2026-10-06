import React from 'react'
import { useNavigate } from 'react-router'
function MovieCars({data}) {

  const {Title, Year, imdbID, Type, Poster}  = data

  const Navigate = useNavigate()
  
  return (
    <div onClick={() =>{
      Navigate('/movie/' + imdbID)
    }} className='bg-[#910825c3] h-70 rounded-2xl shadow-lg shadow-rose-500 hover:scale-110 cursor-pointer transition-all duration-200'>
      <img src={Poster} className='h-6/10 w-full object-cover rounded-tl-2xl rounded-tr-2xl'/>
      <div className='h-4/10 flex flex-col p-2'>
        <h1 className='text-xl text-rose-500 font-bold'>{Title}</h1>
        <div className='text-md flex justify-between'>
          <p className='text-blue-400'>{Year}</p>
          <p className='text-blue-400'>{Type}</p>
        </div>
        <p className='text-center text-white'>show more</p>
      </div>
      </div>

  )
}

export default MovieCars