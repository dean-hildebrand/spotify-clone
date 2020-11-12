import React from 'react'
import '../css/player.css'
import Sidebar from '../components/Sidebar'
import Body from '../components/Body'
import Footer from '../components/Footer'

function Player() {
  return (
    <div className="player">
    <div className="player__body">
    <Sidebar />
    <Body />
    </div>

    <Footer />
    </div>
  )
}

export default Player
