import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router'
export default function Home() {
  const [formData,setFormData] = useState({username :'',password :""});
  const handleInputChange = (e) => {
    const { name,value } =e.target;
    setFormData({...formData,[name]:value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const{username,password} = formData;
    if((username==="santhoshi" && password==="1234"))
    {
      window.location.href="/about";
    }
    else{
      alert("Invalid username password");
    }
  }
  return (
    <div>
        <h1>Fantastic Five</h1>
        <h1>
        <li>Santhoshi</li>
        <li>Gayathri</li>
        <li>yashika</li>
        <li>janani</li>
        <li>swathi</li>
        <li>sumi</li>
        <Link to="/about">About</Link><br />
        <Link to = "/Contact">Contact</Link>
        <h1>this is my login page</h1>
        <form onSubmit={handleSubmit}>
          <label>UserName:</label>
          <input type="text" name='username' value={formData.username} onChange={handleInputChange} required />
          <br />
          <label >Password:</label>
          <input type="password" name='password' value={formData.password} onChange={handleInputChange}></input>
          <button type='submit'>Submit</button>
        </form>
        </h1>
    </div>
  )
}






































































































