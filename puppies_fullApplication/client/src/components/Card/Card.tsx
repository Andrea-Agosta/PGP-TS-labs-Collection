import './Card.css';
import { Puppies } from '../../type';
interface CardPuppy {
  puppy: Puppies;
  index: number;
  // handleclick(event: FormEvent): void;
}

const Card = ({ puppy, index }: CardPuppy) => {
  const url: string = `https://placedog.net/500?id=${index + 1}`;
  return (
    <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center">
      <div className="flip-box my-4" role="button">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={url} alt="Dog" className="img-dim" />
          </div>
          <div className="flip-box-back d-flex flex-column text-center justify-content-center">
            <h3 className="card-title">{puppy.name}</h3>
            <h5 className="card-subtitle mb-2 text-muted">{puppy.breed}</h5>
            <p className="card-text">{puppy.birth}</p>
          </div>
        </div>
      </div >
    </div>
  )
}

export default Card