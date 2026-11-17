import React from 'react'
import { useNavigate } from 'react-router-dom';

const Page2 = ({formData, setFormData}) => {
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };  

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/page3");
  }

  const handleImage = (e) => {
    const file = e.target.files[0];

    setFormData({
      ...formData,
      image: file
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">

      <h2 className="text-xl font-bold mb-5">Additional Details</h2>

      <form onSubmit={handleNext}>

        <div className="mb-4">
          <label>Mobile No.</label>

          <input 
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            maxLength={10}
            required 
            placeholder="Mobile no."
            className="w-full border p-2 rounded mt-1"
            />
        </div>

        <div className="mb-4">
          <label>Birth Date</label>

          <input 
            type="date" 
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label>Profile Photo</label>

          <input 
            type="file" 
            name="image"
            value={formData.file}
            onChange={handleImage}
            required
            className="w-full border p-2 rounded mt-1"
          />

          {formData.image && (
            <p className="text-sm text-green-600 mt-1">
              {/* Selected: {formData.image.name} */}
            </p>
          )}
        </div>

        <div className='flex justify-between'>
          <button 
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-500 text-white px-5 py-2 rounded"
          >
            Prev
          </button>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Next 
          </button>
        </div>

      </form>
    </div>
  );
}

export default Page2;