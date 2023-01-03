import { FormEvent } from "react";
import { UserData } from "../../types/types";

interface ChangeName {
  user: UserData
  handleclick(event: FormEvent): void;
}

const FormChangeName = ({ user: { name }, handleclick }: ChangeName) => {
  return (
    <form onSubmit={handleclick}>
      <hr />
      <h3>Update the Name</h3>
      <input type='text' placeholder={name} name='input' />
      <button type='submit'>Update Name</button>
    </form>
  );
}

export default FormChangeName;