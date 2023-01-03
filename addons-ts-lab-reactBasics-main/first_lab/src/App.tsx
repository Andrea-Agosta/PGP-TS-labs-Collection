import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  interface userData {
    name: string;
    age: number;
    address: string;
  }

  const [user, setUser] = useState<userData>({} as userData);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => setUser({
        name: `${data.results[0].name.first} ${data.results[0].name.last}`,
        age: data.results[0].dob.age,
        address: `${data.results[0].location.street.name}, ${data.results[0].location.street.number}`
      }));
  }, []);


  return (
    <div className="App">
      <div className='container'>
        <h1>Name: {user?.name}</h1>
        <h2>Age: {user?.age}</h2>
        <h1>Address: {user?.address}</h1>
      </div>
    </div>
  );
}

export default App;
