import React, { useState } from 'react';
import Card from './Card';
const Form = () => {
  const [username, setUsername] = useState('');
  const [imageurl, setImageurl] = useState('');
  const [description, setDescription] = useState('');
  const [role, setRole] = useState('');
   
  const[allusers,setAllusers]=useState([]);



 const submithandler = (e) => {
  e.preventDefault();
  const newUser = { username, imageurl, description, role };
  const updatedUsers = [...allusers, newUser];
  setAllusers(updatedUsers);
  console.log("Form submitted:", updatedUsers);
};
  return (
    <div className='p-15'>
      <form className='flex flex-col gap-5 items-center justify-center'>
        <input 
          className='border-2 p-4 border-black rounded-2xl' 
          type='text' 
          placeholder='name' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          className='border-2 p-4 border-black rounded-2xl' 
          type='text' 
          placeholder='imgurl' 
          value={imageurl} 
          onChange={(e) => setImageurl(e.target.value)}
        />
        <input 
          className='border-2 p-4 border-black rounded-2xl' 
          type='text' 
          placeholder='description' 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
        <input 
          className='border-2 p-4 border-black rounded-2xl' 
          type='text' 
          placeholder='role' 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
        />
        <button onClick={submithandler} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
      </form>

      {allusers.map((user, index) => (
        <Card key={index} username={user.username} imageurl={user.imageurl} description={user.description} role={user.role} allusers={user.allusers}/>
      ))}
    </div>
  );
};

export default Form;