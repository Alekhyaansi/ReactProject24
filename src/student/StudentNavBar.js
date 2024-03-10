import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import StudentHome from './StudentHome'
import "./student.css"

export default function StudentNavBar() 
{
  return (
    <div>
        <nav>
            <ul>
                <Link to ="/"><b>Home</b></Link>
            </ul>
        </nav>
        <Routes>
            <Route path='/'Component={StudentHome}/>
        </Routes>
    </div>
  )
}
