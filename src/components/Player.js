import React from 'react'
import '../css/player.css'
import Sidebar from '../components/Sidebar'
import Body from '../components/Body'

function Player() {
  return (
    <div className="player">
    <h1>I am the player component</h1>
    <Sidebar />
    <Body />
    </div>
  )
}

export default Player
