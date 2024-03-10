import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewStudents() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:2024/viewstudents');
      setStudents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (email) => {
    try {
      await axios.delete(`http://localhost:2024/deletestudent/${email}`);
      fetchStudents(); // to redirect to the same page
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Students</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(students) && students.length > 0 ? (
    students.map((student, index) => (
      <tr key={index}>
        <td>{student.email}</td>
        <td>
          <button style={{backgroundColor:"orangered"}} onClick={() => deleteStudent(student.email)} className='button'>Delete</button>
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