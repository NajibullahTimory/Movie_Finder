import React from 'react'
import {Routes, Route} from 'react-router'
import Home from '../home/Home'
import Movie from '../movie/Movie'
import Error from '../Error/Error'

function MyRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie/:id' element={<Movie/>}/>

            <Route path='*' element={<Error/>}/>
        </Routes>
    </div>
  )
}

export default MyRoutes