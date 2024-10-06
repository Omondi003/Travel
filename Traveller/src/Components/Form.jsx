// eslint-disable-next-line no-unused-vars
import React from 'react'

function Form() {

    function handleSubmit(e){
     e.preventDefault()
    }
     return <form className='Addform' onSubmit={handleSubmit}>
       <h2>What do you want to pack</h2>
       <div className='options'>
 
       <select>
        {Array.from({length:20}, (_,i)=> i+1).map(
         (num)=> (
           <option value={num} key={num}>
             {num}
           </option>
         )
        )}
       </select>
 
       <input type='text'></input>
       <button>Submit</button>
       </div>
        
     </form>
 
     
 }

export default Form
