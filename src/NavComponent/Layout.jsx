import React, { useState } from 'react';
import Navbar from './Navbar';
import Test from './Test';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="layout-container">
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Test isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default Layout;
