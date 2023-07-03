import React from "react";
import "./App.css";
import Router from "./shared/Router";

function App() {
 
    return (
        <div className="centered-container">
            <div className="wholebox">
                <div className="titleofpage">
                    <h1 className="title">
                        MY TO-DO LIST<span className="subtitle">react</span>
                    </h1>
                </div>
                <Router />
            </div>
        </div>
import React, { useState } from "react";
import PostBox from "./components/Postbox";
import InputBox from "./components/Inputbox";
import { createTodo, toggleTodo, deleteTodo } from "./redux/modules/todos";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import GlobalStyle from "./GlobalStyle";
import { Title, Container, Wrapper, InProgressBox, CompletedBox } from "./Styled";

function App() {
    // store로부터 필요한 state 가져오기
    const todos = useSelector((state) => {
        return state.todos;
    });

    const dispatch = useDispatch();

    const addBtnHandler = (title, content) => {
        if (title === "" && content === "") {
            alert("emptiness is not a goal");
        } else {
            const newPost = {
                id: uuid(),
                title: title,
                content: content,
                isDone: false,
            };
            dispatch(createTodo(newPost));
        }
    };

    const handleDeleteBox = (id) => {
        if (window.confirm("you really want to delete this?")) {
            dispatch(deleteTodo(id));
        }
    };

    const handleToggleBox = (id) => {
        dispatch(toggleTodo(id));
    };

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Container>
                    <div>
                        <Title>
                            {" "}
                            MY TO-DO LIST<span>react</span>{" "}
                        </Title>
                    </div>
                    <InputBox addBtnHandler={addBtnHandler} />
                    <InProgressBox>in progress...</InProgressBox>
                    <div>
                        {todos.todos
                            .filter((item) => item.isDone === false)
                            .map(function (postInput) {
                                return (
                                    <PostBox
                                        key={postInput.id}
                                        postInput={postInput}
                                        handleToggleBox={handleToggleBox}
                                        handleDeleteBox={handleDeleteBox}
                                    />
                                );
                            })}
                    </div>
                    <CompletedBox>completed</CompletedBox>
                    <div>
                        {todos.todos
                            .filter((item) => item.isDone === true)
                            .map(function (postInput) {
                                return (
                                    <PostBox
                                        key={postInput.id}
                                        postInput={postInput}
                                        handleToggleBox={handleToggleBox}
                                        handleDeleteBox={handleDeleteBox}
                                    />
                                );
                            })}
                    </div>
                </Container>
            </Wrapper>
        </>
    );
}
export default App;
