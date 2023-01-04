import React, { useEffect, useState } from 'react';
import './App.css';
import FormChangeName from './components/form/FormChangeName';
import { UserData } from './types/types';

function App() {

  const [user, setUser] = useState<UserData>({} as UserData);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => setUser({
        name: `${data.results[0].name.first} ${data.results[0].name.last}`,
        age: data.results[0].dob.age,
        address: `${data.results[0].location.street.name}, ${data.results[0].location.street.number}`
      }));
  }, []);

  const handleclick = (event: any): void => {
    event.preventDefault();
    setUser({ ...user, name: event.target[0].value });
    event.target[0].value = '';
  };

  return (
    <div className="App">
      <div className='container'>
        <h1>Name: {user?.name}</h1>
        <h5>Age: {user?.age}</h5>
        <h5>Address: {user?.address}</h5>
        <FormChangeName user={user} handleclick={handleclick} />
      </div>
    </div>
  );
}

export default App;
