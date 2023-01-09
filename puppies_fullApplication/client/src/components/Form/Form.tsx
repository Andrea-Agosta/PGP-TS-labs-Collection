import { ChangeEvent, FormEvent } from "react";

interface sendFormData {
  submitData(e: FormEvent): void;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
}

const Form = ({ submitData, handleChange }: sendFormData) => {
  return (
    <form onSubmit={submitData}>
      <div className="container p-4 text-start">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="breed" className="form-label">Breed:</label>
          <input type="text" className="form-control" id="breed" name="breed" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="birth" className="form-label">Birth:</label>
          <input type="text" className="form-control" id="birth" name="birth" required onChange={handleChange} />
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