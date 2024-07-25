import React, { useEffect, useState } from 'react';

const UseEffectComponent = () => {
  
  const [users, setUsers] = useState("");

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch('https://swapi.dev/api/people/');
        const data = await res.json();
        console.log(data);
        setUsers(data.results);
    }
    fetchData();
  }, [])
  return (
    <div>
      <ul>
        {users && users.map(res => <li>{res.name}</li>)}
      </ul>
    </div>
  )
}

export default UseEffectComponent
