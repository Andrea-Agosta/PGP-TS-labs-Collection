import './Card.css';
import { Puppies } from '../../type';
import { Link } from "react-router-dom";
interface CardPuppy {
  puppy: Puppies;
  index: number;
}

const Card = ({ puppy, index }: CardPuppy) => {
  return (
    <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center">
      <Link to={`/puppy/${puppy.id}`} className="flip-box my-4" role="button" state={{ from: puppy }}>
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={`https://placedog.net/500?id=${puppy.id}`} alt="Dog" className="img-dim" />
          </div>
          <div className="flip-box-back d-flex flex-column text-center justify-content-center">
            <h3 className="card-title text-danger">{puppy.name}</h3>
            <h5 className="card-subtitle mb-2 text-muted">{puppy.breed}</h5>
            <p className="card-text">{puppy.birth}</p>
          </div>
        </div>
      </Link >
    </div>
  )
}

export default Card