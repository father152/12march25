import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='header'>
    <div className='header-container'>
    <ul className='header-title'>
    <li><Link to="/about">About As</Link></li>
    </ul>
    </div>
    
    </div>
  )
}
export {Header}