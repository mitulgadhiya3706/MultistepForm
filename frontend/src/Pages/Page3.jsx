import { useNavigate } from 'react-router-dom';

const Page3 = ({ formData, setFormData }) => {

  const navigate = useNavigate();
  const hobbies = formData.hobbies ?? [];

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle multiple hobbies
  const handleHobbies = (e) => {
    const {value, checked} = e.target;

    // const updatedHobbies = [...formData.hobbies];

    // if(checked){
    //   updatedHobbies.push(value);
    // } else {
    //   updatedHobbies = updatedHobbies.filter(
    //     (hobby) => hobby !== value
    //   );
    // };

    const updatedHobbies = checked
      ? [...hobbies, value]
      : hobbies.filter((hobby) => hobby !== value);

    setFormData({
      ...formData,
      hobbies: updatedHobbies
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/summary");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">

      <h2 className="text-xl font-bold mb-5">Other Details</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-5">

          <label className="font-medium">Gender</label>

          <div className='flex gap-5 mt-2'>
            <label>
              <input 
                type="radio" 
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}  
                required
                className='mr-0.5'
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                className='mr-0.5'
              />
              Female
            </label>

            <label>
              <input 
                type="radio" 
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
                className='mr-0.5'
              />
              Other
            </label>
          </div>
        </div>

        {/* Hobbies */}
        <div className="mb-5">
          
          <label className="font-medium">Hobbies</label>

          <div className="flex gap-5 mt-2">

            <label>
              <input 
                type="checkbox"
                value="Reading"
                checked={hobbies.includes("Reading")}
                onChange={handleHobbies}
                className='mr-0.5'
              />
              Reading
            </label>
  
            <label>
              <input 
                type="checkbox" 
                value="Music"
                checked={hobbies.includes("Music")}
                onChange={handleHobbies}
                className='mr-0.5'
              />
              Music
            </label>

            <label>
              <input 
                type="checkbox" 
                value="Sports"
                checked={hobbies.includes("Sports")}
                onChange={handleHobbies}
                className='mr-0.5'
              />
              Sports
            </label>
          </div>
        </div>

        {/* Portfolio */}
        <div className="mb-5">

          <label className="font-medium">Portfolio Website</label>
          <input 
            type="url" 
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded mt-1"
            placeholder="https://example.com"
          />
        </div>
        
        {/* Experience */}
        <div className="mb-6">

          <label className="font-medium">
            Experience(Years): {formData.experience}
          </label>

          <input 
            type="range" 
            name="experience"
            min="0"
            max="10"
            value={formData.experience}
            onChange={handleChange}
            className="w-full mt-2"
          />
        </div>

        {/* Buttons */}
        <div className='flex justify-between'>
          <button
            type="button"
            onClick={() => navigate("/page2")}
            className="bg-gray-500 text-white px-5 py-2 rounded"
          >
            Prev
          </button>

          <button 
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  )
}

export default Page3;