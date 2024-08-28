import { useState } from 'react';
import './App.css';
import Home from './Home';

function App(){
  let firstname = "ASHOK";
  const[email,setEmail] = useState('ashokgtncollege@gmail.com');
  const[address,setAddress] = useState('Chennai-107.');
  const[phoneno,setPhoneno] = useState('6374059727')
  const validate = () => {
    if (email === "") {
      alert("Email is empty");
    } else if (phoneno === "") {
      alert("Mobile number is empty");
    } else {
      alert("Everything is fine");
    }
  };
  
  return(
    <div className ="App">
    <h1>This is reactx App</h1>
    <Home/>
    <h2>{firstname}</h2>
    <h3>{email}</h3>
    <h4>{address}</h4>
    <h2>{phoneno}</h2>
    <input type ="text" placeholder='enter text' onChange={(e)=>setEmail(e.target.value)} />
    <br/>
    <input type='text' placeholder='enter adrress' onChange={(e)=>setAddress(e.target.value)}/>
    <br />
    <input type="number" placeholder='Enter phno' onChange={(e)=>setPhoneno(e.target.value)} />
    <br/>
    <button type onClick={()=>validate()}> Click me</button>
    </div>
  )
}

export default App;
