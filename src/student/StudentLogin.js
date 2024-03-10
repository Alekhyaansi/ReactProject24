import { useState } from "react"
import React from 'react'
import "./student.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function StudentLogin() 
{
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2024/checkstudentlogin', formData);
      if (response.data!=null) 
      {
        console.log(response.data)
        navigate("/StudentHome");
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div align = "center">
      <h3 align="center"><u>Student Login</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div >
          <label>Email</label>
          <input type="email" id="email" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Login</button>
        <a href="/forgot-password" className="forgot-password">
        Forgot Password?
      </a>
      </form>
    </div>
  );
}
