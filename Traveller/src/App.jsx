  
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

   return <h1>🌴FAR AWAY🏖</h1>
     
}

function Form() {
    return <div className='Addform'>
      <h2>What do you want to pack</h2>
    </div>

    
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


 