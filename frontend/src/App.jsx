import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Layout from './Components/Layout';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Summary from './Pages/Summary';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    dob: "",
    image: "",
    gender: "",
    hobbies: [],
    portfolio: "",
    experience: ""
  })

  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          <Route path="/" element={<Page1 formData={formData} setFormData={setFormData}/>} />

          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/summary" element={<Summary />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
