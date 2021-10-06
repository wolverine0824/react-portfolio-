import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/style.css'

function App() {
  
  const [currentPage, setCurrentPage] = useState('About');

  return (
    <div>
        <Navbar setCurrentPage={setCurrentPage} />
        <Header currentPage={currentPage} />
        <Footer />
    </div>
  );
}

export default App;