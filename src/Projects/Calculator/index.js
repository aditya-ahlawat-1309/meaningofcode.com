import React,{useState, useContext} from 'react'
import "./index_calc.css";

export const Index_calc = () => {

    const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

    return (
        <>
          <div className="app_calc">
      <h1>Calculation</h1>

      <div className="number-inputs">

                // Input elements

                <input
          type="number"
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
          placeholder="0"
        />
        <input
          type="number"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
          placeholder="0"
        />

      </div>

     
      <h2>Addition = {number1+number2}</h2>
       <h2>Subtraction = {number1-number2}</h2>
       <h2>Multiplication = {number1*number2}</h2>
       <h2>Division = {number1/number2}</h2>
      
    
    
    </div>
        </>
    )
}
