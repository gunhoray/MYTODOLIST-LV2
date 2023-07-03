import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {DetailedBtn, DetailedContent, DetailedTitle, DetailedId, DetailedBox, NotFoundBox} from '../Styled'


function Details() {
  const todos = useSelector((state) => state.todos.todos);

  const backToHome = useNavigate();

  const params = useParams();
  // console.log("params", params)
  
  const matchTodo = todos.find((todo) => todo.id === params.id);
  if (!matchTodo) {
    return (
      <NotFoundBox>
          <DetailedTitle >
           sorry, To-Do not found
          </DetailedTitle>
        <DetailedBtn onClick={() => backToHome('/')}>Let's go back Home</DetailedBtn>
      </NotFoundBox>
    );
  }

  // console.log(matchTodo.id); 

  return (
    <DetailedBox key={matchTodo.id}>
      <DetailedId>ID : {matchTodo.id} 
       <DetailedBtn  onClick={() => backToHome('/')}>X</DetailedBtn> 
       </DetailedId>
          <DetailedTitle >
            {matchTodo.title} 
          </DetailedTitle>
          <DetailedContent>
            {matchTodo.content}
          </DetailedContent>
    </DetailedBox>
  );
}

export default Details;
