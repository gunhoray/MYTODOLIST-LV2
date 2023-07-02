import React, { useState } from "react";
import PostBox from "./components/Postbox";
import InputBox from "./components/Inputbox";
import {
    Title,
    Container,
    Wrapper,
    BtnAdd,
    BtnWork,
    BtnWorkBox,
    Input,
    InProgressBox,
    CompletedBox,
    Content,
} from "./Styled";
import GlobalStyle from "./GlobalStyle";

function App() {
    const [posts, setPosts] = useState([]);

    const addBtnHandler = (title, content) => {
        if (title === "" && content === "") {
            alert("emptiness is not a goal");
        } else {
            const newPost = {
                id: posts.length + 1,
                title: title,
                content: content,
                isDone: false,
            };
            setPosts([...posts, newPost]);
        }
    };

    const handleDeleteBox = (id) => {
        if (window.confirm("you really want to delete this?")) {
            const selectedToDeleted = posts.filter(function (post) {
                return post.id !== id;
            });
            setPosts(selectedToDeleted);
        }
    };

    const handleToggleBox = (id) => {
        // state 복사
        const newPosts = [...posts];
        // 복사한 값에서 map으로 해당 id의 객체의 isDone 값을 거꾸로 바꿔줍니다.
        newPosts.map((post) => {
            return post.id === id && (post.isDone = !post.isDone);
        });
        // 변경된 값이 든 복사 객체를 setState 해줍니다.
        setPosts(newPosts);
    };

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Container>
                    <div>
                        <Title>
                            MY TO-DO LIST<span>react</span>
                        </Title>
                    </div>
                    <InputBox addBtnHandler={addBtnHandler} />
                    <InProgressBox>in progress...</InProgressBox>
                    <div>
                        {posts
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
                        {posts
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
