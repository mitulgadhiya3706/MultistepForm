import './App.css'
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Page1 from './Pages/Page1';
import Layout from './Components/Layout';

function App() {

  return (
    // <div className="min-h-screen bg-gray-100">
    //   <Navbar />
    //   <div className='flex'>
    //     <Sidebar />
    //     <main className="flex-1 p-6">
    //       <h1 className="text-2xl font-bold text-gray-800">
    //         Welcome to Dashboard
    //       </h1>
    //       <p>This is your main content area.</p>
    //       <Page1 />
    //     </main>
    //   </div>
    // </div>

    <Layout>
      <p>welocme to layout</p>
    </Layout>
  )
}

export default App;
