  
import './App.css'

export default function App(){
   return <div>

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
    return <form className='Addform'>
      <h2>What do you want to pack</h2>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <input type='text'></input>
      <button>Submit</button>
    </form>

    
}

function PackingList() {
   return <div className='List'>
       List
   </div>
}

function Status() {
  return <footer> 
    You have X items on the list and you have packed X items (X%)
  </footer>
}


 