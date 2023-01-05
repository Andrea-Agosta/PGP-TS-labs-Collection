import { useEffect, useState } from 'react';
import { Puppies } from '../type';
import axios from 'axios';
import Card from '../components/Card/Card';


const Home = () => {
  const [puppies, setPuppies] = useState<Puppies[]>([{} as Puppies]);

  useEffect(() => {
    axios.get('/api/puppies')
      .then(data => data.data)
      .then(data => setPuppies(data))
  }, []);
  return (
    <>
      <a href="#" className='btn btn-outline-light btn-up'> ^ </a>
      <section className='min-height mt-5 d-flex container justify-content-around mt-5'>
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