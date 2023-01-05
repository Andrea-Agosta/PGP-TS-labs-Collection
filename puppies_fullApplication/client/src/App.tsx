import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <section className='min-height container mt-5'>
        <Card />
      </section>
      <Footer />
    </div>
  );
}

export default App;
