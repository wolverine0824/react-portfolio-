import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/style.css'

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