import { Puppies, PuppiesList } from "../type"
import { Trash3Fill } from "react-bootstrap-icons"
import Modal from "../components/Modal/Modal";

const PuppyPage = ({ puppies }: PuppiesList) => {

  console.log(puppies);


  const id: number = Number(window.location.href.split('/').pop());
  const puppy: Puppies[] = puppies.filter(puppy => puppy.id === id);

  return (
    <div className='mt-5 d-flex justify-content-center mb-5'>
      <div className="bg-light mt-5 p-5 row">
        <img src={`https://placedog.net/600?id=${id}`} alt="Dog" />
        <div className="col-6">
          <h3 className="mt-3">Name: <span className="text-danger">{puppy[0].name}</span></h3>
          <h5>Breed: {puppy[0].breed}</h5>
          <h5 className="mb-0">Birth: {puppy[0].birth}</h5>
        </div>
        <div className="col-6">
          <Modal typeBody={"edit"} id={id} />
          <Trash3Fill className="utility-icon" type="button" />
        </div>
      </div>
    </div>
  )
}

export default PuppyPage