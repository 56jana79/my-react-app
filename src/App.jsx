import { useState } from 'react'
import Navbar from './NavComponent/Navbar'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Dashboard from './NavMainComponents/Dashboard'
import Test from './NavMainComponents/Test'
import ClassPage from './NavMainComponents/ClassPage'
import People from './NavMainComponents/People'
import Teacher from './NavMainComponents/Teacher'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Uncategorized from './Sections/Uncategorized'
function App() {


  return (
    <>
      <div>
       
      
       <BrowserRouter>
        <Navbar/>
         <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Test />} />
        <Route path="/class" element={<ClassPage />} />
        <Route path="/people" element={<People />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/section1" element={<Section1 />} />
        <Route path="/section2" element={<Section2 />} />
        <Route path="/un" element={<Uncategorized />} />

      </Routes>
       </BrowserRouter>

      </div>
    </>
  )
}

export default App
