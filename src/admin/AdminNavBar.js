import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import "./Admin.css"

import AdminHome from './AdminHome';
import ViewStudents from './ViewStudents';
import ViewFaculties from './ViewFaculties';

export default function AdminNavBar() 
{
  return (
    <div>

    <nav>
     <ul>
     <Link to="/"><b>Home</b></Link>
     <Link to="/viewstudents"><b>View Students</b></Link>
     <Link to="/viewfaculties"><b>View Faculties</b></Link>
     </ul>
     </nav>

         <Routes>
         <Route path="/" Component={AdminHome} exact/>
         <Route path="/viewstudents" Component={ViewStudents} exact/>
         <Route path="/viewfaculties" Component={ViewFaculties} exact/>
        </Routes>

    </div>
  )
}