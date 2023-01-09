import { ChangeEvent, FormEvent } from "react";
import { Pencil } from "react-bootstrap-icons";
import Form from "../Form/Form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FormaData, ModalBody } from "../../type";


const Modal = ({ typeBody }: ModalBody) => {
  const navigate = useNavigate();
  const [id, setId] = useState<number>(0);
  const [formData, setFormData] = useState<FormaData>({ name: "", breed: "", birth: "" });

  useEffect(() => {
    axios.get('/api/puppies')
      .then(data => data.data)
      .then(data => setId(data.pop().id))
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    const name = event.currentTarget.name;

    if (name === "name") {
      setFormData(prev => ({ ...prev, name: newValue }));
    }
    if (name === "breed") {
      setFormData(prev => ({ ...prev, breed: newValue }));
    }
    if (name === "birth") {
      const correctDataFormat = newValue.split('-').reverse().join('/');
      setFormData(prev => ({ ...prev, birth: correctDataFormat }));
    }
  }

  const submitData = (event: FormEvent<HTMLInputElement>): void => {
    if (typeBody === "addPuppy") {
      axios({
        method: 'post',
        url: `/api/puppies`,
        data: formData
      });
      navigate(`/puppy/${id + 1}`,
        {
          state: formData
        });
    }
    if (typeBody === "edit") {
      axios({
        method: 'put',
        url: `/api/puppies/${id}`,
        data: formData
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
              <Form submitData={submitData} handleChange={handleChange} />
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
              <Form submitData={submitData} handleChange={handleChange} />
            </div>
          </div>
        </div>
      </>
    )
}

export default Modal