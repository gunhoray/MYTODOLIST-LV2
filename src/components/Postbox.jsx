import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledPostBox, BtnWork, BtnWorkBox, Content } from "../Styled";
const PostBox = ({postInput, handleToggleBox, handleDeleteBox}) => {

const navigate = useNavigate();

const goToDetail = (id) => {
  navigate(`/details/${id}`);
};
    return (
        <StyledPostBox key={postInput.id}>
             <div>{postInput.title}
                <button onClick={() => goToDetail(postInput.id)}>+</button>
            </div>
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
