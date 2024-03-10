import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import FacultyHome from './FacultyHome'
import ViewStudents from './ViewStudents'


export default function FacultyNavBar() 
{
  return (
    <div>
        <nav>
            <ul>
                <Link to ="/"><b>Home</b></Link>
                <Link to ="/viewstudents"><b>View Students</b></Link>
            </ul>
        </nav>
        <Routes>
            <Route path='/'Component={FacultyHome}/>
            <Route path="/viewstudents" Component={ViewStudents} />
        </Routes>
    </div>
  )
}
