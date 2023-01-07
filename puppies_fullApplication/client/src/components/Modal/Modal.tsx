import { FormEvent } from "react";
import { Pencil } from "react-bootstrap-icons";
import Form from "../Form/Form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


interface ModalBody {
  typeBody: string;
  id: number
}

const Modal = ({ typeBody, id }: ModalBody) => {
  const navigate = useNavigate();
  const formData = (event: FormEvent<HTMLInputElement>): void => {
    const [name, breed, birth]: any = event.target;
    if (typeBody === "addPuppy") {
      axios({
        method: 'post',
        url: `/api/puppies`,
        data: {
          name: name.value,
          breed: breed.value,
          birth: birth.value
        }
      });
      navigate(`/puppy/${id + 1}`, {
        state: {
          puppies: {
            name: name.value,
            breed: breed.value,
            birth: birth.value
          }
        }
      });
    }
    if (typeBody === "edit") {
      axios({
        method: 'put',
        url: `/api/puppies/${id}`,
        data: {
          name: name.value,
          breed: breed.value,
          birth: birth.value
        }
      });
    }
  };

  return typeBody === "addPuppy" ?
    (
      <>
        <button type="button" className="btn btn-danger me-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
          Add new Puppy
        </button>
        <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={- 1} aria-labelledby="staticBackdropLabel" aria-hidden="true" >
          <div className="modal-dialog modal-dialog-centered" >
            <div className="modal-content" >
              <div className="modal-header" >
                <h1 className="modal-title fs-5" id="staticBackdropLabel" >Add New Puppy</h1>
                < button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>
              <Form formData={formData} />
            </div>
          </div>
        </div>
      </>
    )
    :
    (
      <>
        < Pencil className="utility-icon me-4" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit" />
        <div className="modal" id="staticBackdropEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={- 1} aria-labelledby="staticBackdropLabel" aria-hidden="true" >
          <div className="modal-dialog modal-dialog-centered" >
            <div className="modal-content" >
              <div className="modal-header" >
                <h1 className="modal-title fs-5" id="staticBackdropLabel" >Edit Puppy Data</h1>
                < button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>
              <Form formData={formData} />
            </div>
          </div>
        </div>
      </>
    )
}

export default Modal