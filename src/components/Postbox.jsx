import React from "react";
import { useNavigate } from "react-router-dom";

const PostBox = ({postInput, handleToggleBox, handleDeleteBox}) => {

const navigate = useNavigate();

const goToDetail = (id) => {
  navigate(`/details/${id}`);
};
    return (
        <div key={postInput.id} className="post-style">
            <div>  
                {postInput.title}
                <button onClick={() => goToDetail(postInput.id)}>+</button>
            </div>
            <div className='contentsize'>
                {postInput.content}
            </div>
            <div className="workbuttonbox">
                <button className="workbutton" onClick={()=>handleDeleteBox(postInput.id)}>DELETE</button> 
                <button className="workbutton" onClick={()=>handleToggleBox(postInput.id)}>{ postInput.isDone ? "NOT COMPLETED" : "COMPLETED"}</button>
            </div>
        </div>
import { StyledPostBox, BtnWork, BtnWorkBox, Content } from "../Styled";

const PostBox = ({ postInput, handleToggleBox, handleDeleteBox }) => {
    return (
        <StyledPostBox key={postInput.id}>
            <div>{postInput.title}</div>
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

