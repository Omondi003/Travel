// eslint-disable-next-line no-unused-vars
import React from 'react'
let classItems=[

    {Amount:2, name:'socks', status:true },
    {Amount:3, name:'sweater',status:false},
    {Amount:4, name:'Trousers',status:true},
    {Amount:5, name:'jackets', status:false}
  
  ]

 


function PackingList() {
    return <div className='List'>
     <ul>
 
     {classItems.map((item)=> (
 
         <Items value={item} key={item.id} />
        
         
            ))}
     </ul>  
     
    </div>
 }


 // Function to render each value And Item on packing list component
function Items(props){
    // Access item from props
    
     const { Amount, name, status } = props.value;


    return <li>

    <span>
        Amount: {Amount}, Name: {name}, Packed: {status ? 'Yes' : 'No'}
      </span>

    </li>
 }

 

export default PackingList
