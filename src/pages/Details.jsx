import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {detailedBtn, detailedContent, detailedTitle, detailedId, detailedBox} from '../Styled'


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
    <detailedBox key={matchTodo.id}>
      <detailedId>ID : {matchTodo.id} 
       <detailedBtn  onClick={() => backToHome('/')}>X</detailedBtn> 
       </detailedId>
          <detailedTitle >
            {matchTodo.title} 
          </detailedTitle>
          <detailedContent>
            {matchTodo.content}
          </detailedContent>
    </detailedBox>
  );
}

export default Details;
