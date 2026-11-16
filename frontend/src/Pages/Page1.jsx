import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = ({formData, setFormData}) => {

  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name] : value
    });
  };

  // Validate email and go to next page
  const handleNext = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(formData.email)){
      setEmailError("Please enter valid email address.");
      return;
    }

    setEmailError("");
    navigate("/page2");
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">

      <h2 className="text-xl font-bold mb-5">Basic Details</h2>
      
      <form onSubmit={handleNext}>

        <div className='mb-4'>
          <label>Name</label>
          <input 
            type="text"
            name="name"
            value={formData.value}
            onChange={handleChange}
            required
            placeholder="Name"
            className="w-full border p-2 rounded mt-1"
            />
        </div>

        <div className='mb-4'>
          <label>Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full border p-2 rounded mt-1"
          />

          {emailError && (
            <p className="text-red-500 text-xs mt-1">{emailError}</p>
          )}
        </div>

        <div className='mb-5'>
          <label>Age</label>
          <input 
            type="number" 
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            placeholder="Age"
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        <div className='text-right'>
          <button 
            type='submit'
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >Next</button>
        </div>
        
      </form>
    </div>
  )
}

export default Page1;