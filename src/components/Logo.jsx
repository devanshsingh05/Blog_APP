import React from 'react'
import logo from "../assets/blog2.png"
function Logo({width = '100px'}) {
  return (
    <img src={logo} alt="" width={width} />
  )
}

export default Logo