// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'

function Form() {
      //State for managing the items both the items 
      const [items,setItems]= useState({

         selectedNumber: 1,
         textInput: '',
      })


 
    function handleSubmit(e){

     console.log(items)
     e.preventDefault()

    }
    function handleChange(e){
       const [name, value]=e.target;
       setItems(prevData=> ({ ...prevData, [name]:value}))

    }
    

     return <form className='Addform' onSubmit={handleSubmit}>
       <h2>What do you want to pack</h2>
       <div className='options'>
 
       <select
        name='selectedNumber'
        value={items.selectedNumber}
        onChange={handleChange}
       >
        {Array.from({length:20}, (_,i)=> i+1).map(
         (num)=> (
           <option value={num} key={num}>
             {num}
           </option>
         )
        )}
       </select>
 
       <input 
         type='text'
         value={items.textInput}
         onChange={handleChange}

        />
               <button>Submit</button>
       </div>
        
     </form>
 
     
 }

export default Form
