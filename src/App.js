import './style.css'
import './App.css';
import React , {useState , useRef , useEffect} from 'react'
import Todo from './Todo';

const localkey = "potous.post"

function App() {
const [post , setpost] = useState([])
const inputref = useRef()


useEffect(() => {
let storedlocal =JSON.parse(localStorage.getItem(localkey))

if(storedlocal){
  setpost(storedlocal)
}

},[])


useEffect(() => {

  localStorage.setItem(localkey , JSON.stringify(post))

}, [post])






















function sub(){

const valuee = inputref.current.value
if(valuee === "") return 



setpost(prev => {

return[...prev ,{
value:valuee , 
id:prev.length,
completed:false


}]



})
inputref.current.value= null
}

function finish (id) {
const newwpost = [...post]
const todo = newwpost.find(post => post.id ===id)
todo.completed = !todo.completed
setpost(newwpost)


  
}
function remove (e) {
const updatepost = post.filter(function(post){


return (post.id).toString() !== e.target.parentElement.getAttribute("uniqueid")



})
setpost(updatepost)


}






  return (
    
<div className='App'>
<div className='todo'>

<div className='form'>

<input ref={inputref} type="text" placeholder='What is your future tasks ...' />
<button onClick={sub}>Add</button>


</div>
<div className='todo-inner'>
<h1>TO DO LIST </h1>
<div className='container'>

<Todo  post ={post} remove={remove} finish={finish}  / >

</div>


</div>
</div>

</div>



  )
}

export default App;
