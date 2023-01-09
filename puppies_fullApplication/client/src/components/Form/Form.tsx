import { FormEvent } from "react";

interface sendFormData {
  formData(e: FormEvent): void;
}

const Form = ({ formData }: sendFormData) => {
  return (
    <form onSubmit={formData}>
      <div className="container p-4 text-start">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="breed" className="form-label">Breed:</label>
          <input type="text" className="form-control" id="breed" required />
        </div>
        <div className="mb-3">
          <label htmlFor="birth" className="form-label">Birth:</label>
          <input type="text" className="form-control" id="birth" required />
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-danger" >Submit</button>
      </div>
    </form >
  )
}

export default Form