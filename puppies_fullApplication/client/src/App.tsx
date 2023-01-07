import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import Home from './layout/Home';
import PuppyPage from './layout/PuppyPage';
import { useEffect, useState } from 'react';
import { Puppies } from './type';
import axios from 'axios';


function App() {
  const [puppies, setPuppies] = useState<Puppies[]>([{} as Puppies]);

  useEffect(() => {
    axios.get('/api/puppies')
      .then(data => data.data)
      .then(data => setPuppies(data))
  }, []);

  return (
    <div className="App">
      <Navbar nPuppies={puppies.length} />
      <div className="min-height">
        <Routes>
          <Route path="/" element={<Home puppies={puppies} />}></Route>
          <Route path="/puppy/:id" element={<PuppyPage />}></Route>
        </Routes >
      </div>
      <Footer />
    </div >
  );
}

export default App;
