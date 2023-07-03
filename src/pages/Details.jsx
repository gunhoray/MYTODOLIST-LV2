import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Details() {
  const todos = useSelector((state) => state.todos.todos);

  const backToHome = useNavigate();

  const params = useParams();
  // console.log("params", params)
  
  const matchTodo = todos.find((todo) => todo.id === params.id);
  if (!matchTodo) {
    return (
      <div>
        <h3>Todo not found</h3>
        <button onClick={() => backToHome('/')}>Back to Home</button>
      </div>
    );
  }

  // console.log(matchTodo.id); 

  return (
    <div>
      <div>ID : {matchTodo.id}  <button onClick={() => backToHome('/')}>X</button> </div>
          <div>
          {matchTodo.title} 
          </div>
              <div className='contentsize'>
                  {matchTodo.content}
              </div>
    </div>
  );
}

export default Details;
