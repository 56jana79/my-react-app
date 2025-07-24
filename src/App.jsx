import { useState } from 'react';
import Navbar from './NavComponent/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './NavMainComponents/Dashboard';
import Test from './NavMainComponents/Test';
import ClassPage from './NavMainComponents/ClassPage';
import People from './NavMainComponents/People';
import Teacher from './NavMainComponents/Teacher';
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Uncategorized from './Sections/Uncategorized';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        <Routes>
          <Route path="/dashboard" element={<Dashboard isSidebarOpen={isSidebarOpen} />} />
          <Route path="/" element={<Test isSidebarOpen={isSidebarOpen} />} />
          <Route path="/class" element={<ClassPage isSidebarOpen={isSidebarOpen} />} />
          <Route path="/people" element={<People isSidebarOpen={isSidebarOpen} />} />
          <Route path="/teacher" element={<Teacher isSidebarOpen={isSidebarOpen} />} />
          <Route path="/section1" element={<Section1 isSidebarOpen={isSidebarOpen} />} />
          <Route path="/section2" element={<Section2 isSidebarOpen={isSidebarOpen} />} />
          <Route path="/un" element={<Uncategorized isSidebarOpen={isSidebarOpen} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
