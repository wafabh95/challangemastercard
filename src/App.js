
import mastercard from './facebook-actu-n26-business-metal.jpg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './App.css';
import { useState } from "react"

function App() {
  const [number, setNumber] = useState("****************");
  const [date, setDate] = useState("1503");
  const [name, setName] = useState("");
const maxnumber = 16;
  return (
    
    <div className="App-header" style={{backgroundImage:`url(${mastercard})`,backgroundRepeat: "no-repeat",backgroundSize: "100% 70%"}}>
      
       <p className="num">{number}</p>
       <p>{date.slice(0,2)}/{date.slice(2,4)}</p>
       <p>{name}</p>
      
       
  <Form>
    {console.log()}
    <Form.Control type="text" placeholder="num card" onChange={(e)=>{e.target.value.length <= maxnumber ?setNumber(number.replace(number.slice(0,e.target.value.length),e.target.value)) : alert("The Number of MasterCard must be less then 16 ")}}/>
    <Form.Control type="text" placeholder="expiration date" onChange={(e)=>{e.target.value.length<=4 ?setDate(e.target.value):alert("mettre sous forme jj/mm ne dépasse pas 4 chiffre")}}/>
    <Form.Control type="text" placeholder="Enter name"onChange={(e)=>{setName(e.target.value)}} />
  </Form>

</div>
    
    
    
  );
}

export default App;
