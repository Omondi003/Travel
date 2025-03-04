// eslint-disable-next-line no-unused-vars
import React from 'react'
 

function PackingList({items}) {
    return <div className='List'>
     <ul  >
 
     {items.map((item)=> (
 
         <Items value={item} key={item.id} />
        
         
            ))}
     </ul>  
     
    </div>
 }


 // Function to render each value And Item on packing list component
 function Items(props) {

  const { Amount, name, status } = props.value; // Now correctly mapped

  return (
      <li style={{ listStyle: 'none', color: 'white', fontFamily: 'Poppins' }}>
          <span>{Amount} </span>
          <span>{name} </span>
          <span style={{ color: 'yellow' }}>{status ? 'Yes' : 'No'}</span>
      </li>
  );
}

 

export default PackingList


 