// eslint-disable-next-line no-unused-vars
import React from 'react'
let classItems=[

    [2, 'socks', true ],
    [3, 'sweater', false],
    [4, 'Trousers', true],
    [5, 'jackets', false]
  
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
