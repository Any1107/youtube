import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Devloper from './pages/Devloper'
import Today from './pages/Today'
import Webd from './pages/Webd'
import Wibsite from './pages/Wibsite'
import China from './pages/China'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Port from './pages/Port'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/today' element={<Today/>} />
          <Route path='/developer' element={<Devloper/>} />
          <Route path='/webd' element={<Webd/>} />
          <Route path='/website' element={<Wibsite/>} />
          <Route path='/china' element={<China/>} />
          <Route path='/youtube' element={<Youtube/>} />
          <Route path='/channel/:channelID' element={<Channel/>} />
          <Route path='/port' element={<Port/>} />
          <Route path='/video/:videoID' element={<Video/>} />
          <Route path='/search/:searchID' element={<Search/>} />
          <Route path='/*' element={<Not/>} />
        </Routes>
      </BrowserRouter>
     )
}

export default App

