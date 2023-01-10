import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Homepage from './layout/Homepage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="min-height">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          {/* <Route path="/puppy/:id" element={<PuppyPage />}></Route> */}
        </Routes >
      </div>
      <Footer />
    </div >
  );
}

export default App;
