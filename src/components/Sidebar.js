import React from 'react'
import '../css/sidebar.css'
import SidebarOption from './SidebarOption'

function Sidebar() {
  return (
    <div className="sidebar">
    <img className="side__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"/>
    <SidebarOption />
    <SidebarOption />
    <SidebarOption />
    </div>
  )
}

export default Sidebar
