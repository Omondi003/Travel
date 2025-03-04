// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'

function Form({ onAddItems}) {

     const key = `${Date.now()}-${Math.random()}`;

      //State for managing the items both the items 
      const [input,setInput]= useState({

         selectedNumber: 1,
         textInput: '',
         unique:key,
         status:false
      })   

// handlesubmit new modified
    function handleSubmit(e) {
      e.preventDefault(); // Move this to the top
  
      const newItem = {
          Amount: input.selectedNumber, // Rename selectedNumber to Amount
          name: input.textInput,        // Rename textInput to name
          status: input.status,         // Keep status as is
          id: Date.now()                // Add a unique ID
      };
  
      onAddItems(newItem); // Pass newItem to the parent function
  
      // Reset form fields after submission
      setInput({
          selectedNumber: 1,
          textInput: '',
          unique: `${Date.now()}-${Math.random()}`,
          status: false
      });
  }
  

     
    
// Handlechange modified
    function handleChange(e) {
      const { name, value } = e.target;
      
      setInput((prevData) => ({
          ...prevData,
          [name]: name === 'selectedNumber' ? Number(value) : value // Convert to number
      }));
  }
  
    

     return <form className='Addform' onSubmit={handleSubmit}>
       <h2>What do you want to pack</h2>
       <div className='options'>
    
    
       <select
        name='selectedNumber'
        value={input.selectedNumber}
        onChange={handleChange}
       >
        {Array.from({length:20}, (_,i)=> i+1).map(
         (num)=> (
           <option value={num} key={num} >
             {num}
           </option>
         )
        )}
       </select>
 
       <input 
         type='text'
         name='textInput'
         value={input.textInput}
         onChange={handleChange}
        />

        <button>Submit</button>
       </div>
        
     </form>
 
     
 }

export default Form
