import React, { useState } from "react";
import "./App.css";
import PostBox from "./components/Postbox";
import InputBox from "./components/Inputbox";
import { createTodo, toggleTodo, deleteTodo } from "./redux/modules/todos";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";

function App() {
    // store로부터 필요한 state 가져오기
    const todos = useSelector((state) => {
        return state.todos;
    });

    const dispatch = useDispatch();

    // const [posts, setPosts] =useState([]);

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
            // setPosts([...posts,newPost]);
            dispatch(createTodo(newPost));
        }
    };

    const handleDeleteBox = (id) => {
        if (window.confirm("you really want to delete this?")) {
            // const selectedToDeleted = posts.filter(function (post) {
            //     return post.id !== id;
            // });
            // setPosts(selectedToDeleted);
            dispatch(deleteTodo(id));
        }
    };

    const handleToggleBox = (id) => {
        // state 복사
        //const newPosts = [...posts];
        // 복사한 값에서 map으로 해당 id의 객체의 isDone 값을 거꾸로 바꿔줍니다.
        // newPosts.map((post) => {
        //     return post.id === id && (post.isDone = !post.isDone);
        // });
        // 변경된 값이 든 복사 객체를 setState 해줍니다.
        //setPosts(newPosts);
        dispatch(toggleTodo(id));
    };

    return (
        <div className="centered-container">
            <div className="wholebox">
                <div className="titleofpage">
                    <h1 className="title">
                        MY TO-DO LIST<span className="subtitle">react</span>
                    </h1>
                </div>
                <InputBox addBtnHandler={addBtnHandler} />
                <div className="inprogressbox">in progress...</div>
                <div className="postbox-style">
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
                <div className="completedbox">completed</div>
                <div className="postbox-style">
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
            </div>
        </div>
    );
}
export default App;
