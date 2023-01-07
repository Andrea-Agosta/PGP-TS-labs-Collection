import { Puppies } from "../type"
import { Trash3Fill } from "react-bootstrap-icons"
import Modal from "../components/Modal/Modal";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const PuppyPage = () => {
  const [puppyData, setPuppyData] = useState<Puppies>({} as Puppies);
  let id: number = -1;
  let regex = /\/([0-9]+)(?=[^/]*$)/;
  const url: string = window.location.href;
  const partialUrl = regex.exec(String(url));
  if (partialUrl) {
    id = Number(partialUrl[1]);
  }
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/puppies/${id}`)
      .then(data => data.data)
      .then(data => setPuppyData(data))
  });

  const deletePuppy = (): void => {
    axios.delete(`/api/puppies/${id}`)
    navigate(`/`, { state: { reload: true } });
  }

  return (
    <div className='mt-5 d-flex justify-content-center mb-5' >
      <div className="bg-light mt-5 p-5 row">
        <img src={`https://placedog.net/600?id=${id}`} alt="Dog" />
        <div className="col-6">
          <h3 className="mt-3">Name: <span className="text-danger">{puppyData.name}</span></h3>
          <h5>Breed: {puppyData.breed}</h5>
          <h5 className="mb-0">Birth: {puppyData.birth}</h5>
        </div>
        <div className="col-6">
          <Modal typeBody={"edit"} />
          <Trash3Fill className="utility-icon" type="button" onClick={deletePuppy} />
        </div>
      </div>
    </div>
  )
}

export default PuppyPage