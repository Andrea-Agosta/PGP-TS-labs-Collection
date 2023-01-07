import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import Home from './layout/Home';
import PuppyPage from './layout/PuppyPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="min-height">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/puppy/:id" element={<PuppyPage />}></Route>
        </Routes >
      </div>
      <Footer />
    </div >
  );
}

export default App;
