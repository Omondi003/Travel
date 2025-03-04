  
import './App.css'
import { useState } from 'react'
import { Form, Logo, Status,PackingList } from './Components'

 
 const App = ()=>{
    
     const [items, setItems]=useState([]);

     function handleAddItems(item) {
         setItems((items)=> [...items, item])
     }


    

     
   return <div className='App'>

     <Logo />
     <Form onAddItems={handleAddItems}/>
     <PackingList items={items}/>
 
     <Status />

   </div>
}

export default App;
 

 

 


 