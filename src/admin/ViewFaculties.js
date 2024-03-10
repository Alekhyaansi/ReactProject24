import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewFaculties() {
  const [faculties, setFaculties] = useState([]);

  const fetchFaculties = async () => {
    try {
      const response = await axios.get('http://localhost:2024/viewfaculties');
      setFaculties(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchFaculties();
  }, []);

  const deleteFaculty = async (username) => {
    try {
      await axios.delete(`http://localhost:2024/deletefaculty/${username}`);
      fetchFaculties(); // to redirect to the same page
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Faculties</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(faculties) && faculties.length > 0 ? (
    faculties.map((faculty, index) => (
      <tr key={index}>
        <td>{faculty.username}</td>
        <td>
          <button style={{backgroundColor:"orangered"}} onClick={() => deleteFaculty(faculty.username)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="1">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}