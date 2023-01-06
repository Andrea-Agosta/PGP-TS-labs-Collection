import { FormEvent, InputHTMLAttributes } from "react";
import { Pencil } from "react-bootstrap-icons";
import Form from "../Form/Form";

interface ModalBody {
  typeBody: string;
}

const Modal = ({ typeBody }: ModalBody): any => {

  const formData = (event: FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const [name, breed, birth]: any = event.target;

  };

  return (
    <>
      {typeBody === "addPuppy" ?
        <button type="button" className="btn btn-danger me-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
          Add new Puppy
        </button>
        :
        < Pencil className="utility-icon me-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
      }
      <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={- 1} aria-labelledby="staticBackdropLabel" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered" >
          <div className="modal-content" >
            <div className="modal-header" >
              <h1 className="modal-title fs-5" id="staticBackdropLabel" > Add New Puppy </h1>
              < button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" > </button>
            </div>
            <Form formData={formData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal