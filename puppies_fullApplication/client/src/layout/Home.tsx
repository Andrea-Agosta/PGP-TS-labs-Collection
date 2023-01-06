import { PuppiesList } from '../type';
import Card from '../components/Card/Card';


const Home = ({ puppies }: PuppiesList) => {
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