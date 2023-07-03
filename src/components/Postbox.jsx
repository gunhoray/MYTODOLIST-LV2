import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledPostBox, BtnWork, BtnWorkBox, Content, PostBtn, PostTitle } from "../Styled";
const PostBox = ({postInput, handleToggleBox, handleDeleteBox}) => {

const navigate = useNavigate();

const goToDetail = (id) => {
  navigate(`/details/${id}`);
};
    return (
        <StyledPostBox key={postInput.id}>
             <PostTitle>{postInput.title}
                <PostBtn onClick={() => goToDetail(postInput.id)}>+</PostBtn>
            </PostTitle>
            <Content>{postInput.content}</Content>
            <BtnWorkBox>
                <BtnWork onClick={() => handleDeleteBox(postInput.id)}>DELETE</BtnWork>
                <BtnWork onClick={() => handleToggleBox(postInput.id)}>
                    {postInput.isDone ? "NOT COMPLETED" : "COMPLETED"}
                </BtnWork>
            </BtnWorkBox>
        </StyledPostBox>
    );
};

export default PostBox;
