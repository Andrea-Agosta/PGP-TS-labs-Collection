import { Puppies } from '../type';
import Card from '../components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [puppies, setPuppies] = useState<Puppies[]>([{} as Puppies]);

  useEffect(() => {
    axios.get('/api/puppies')
      .then(data => data.data)
      .then(data => setPuppies(data))
  }, []);

  return (
    <>
      <a href="/" className='btn btn-outline-light btn-up'> ^ </a>
      <section className='d-flex container justify-content-around'>
        <div className='row mt-5'>
          {
            puppies.map((puppy, index) => <Card puppy={puppy} key={index} index={index} />)
          }
        </div>
      </section>
    </>
  )
}

export default Home