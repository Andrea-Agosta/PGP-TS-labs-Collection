import './Card.css';
import { Puppies } from '../../type';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
interface CardPuppy {
  puppy: Puppies;
  index: number;
}

const Card = ({ puppy, index }: CardPuppy) => {

  const [isDesktop, setDesktop] = useState<boolean>(window.innerWidth > 1200);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 1200);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [isDesktop]);

  return (
    <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center">
      <Link to={`/puppy/${puppy.id}`} className={isDesktop ? "flip-box my-4" : "my-4 text-decoration-none text-reset"} role="button" state={{ from: puppy }}>
        {
          isDesktop ? (
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
          )
            :
            (
              <div className="card card-width">
                <img src={`https://placedog.net/500?id=${puppy.id}`} alt="Dog" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-danger">{puppy.name}</h5>
                  <h5 className="card-title ">{puppy.breed}</h5>
                  <p className="card-text">{puppy.birth}</p>
                </div>
              </div>
            )
        }
      </Link >
    </div>
  )
}

export default Card