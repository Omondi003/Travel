  
import './App.css'

let classItems=[
  { 
    id:2,
    name:'socks',
    status:true

  },
  {  
    id:3,
    name:'sweater',
    status:false
  },
  { 
    id:4,
    name:'Trousers',
    status:true
  },
  { 
    id:5,
    name:'jackets',
    status:false
  }

]
export default function App(){
   return <div className='App'>

     <Logo />
     <Form />
     <PackingList />
     <Status />

   </div>
}

function Logo() {

   return <h1 className='logos'>🌴FAR AWAY🏖</h1>
     
}

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

function PackingList() {
   return <div className='List'>
    <ul>

    {classItems.map((item)=> {

        <Items value={item} key={item.id} />
        
           })}
    </ul>  
   </div>
}

// Function to render each value
function Items(props){
   return <li>
   <span>
    {item.id}
    <p>Heloo</p>
   </span>
   </li>
}

function Status() {
  return <footer> 
    You have X items on the list and you have packed X items (X%)
  </footer>
}


 