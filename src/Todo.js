import React from 'react'

const Todo = ({post , remove , finish}) => {




  return (
   <> 
   {
post.map(post => (

<div className="task" key={post.id} uniqueid={post.id}>

<div onClick={(e) => finish(post.id)} className={post.completed ?"square done" : "square"}></div>
<p>{post.value}</p>

<span className="del" onClick={(e) => remove(e)}>Delete</span>



</div>







))






   }
   
   
   
   
   
   
   </>
  )
}

export default Todo