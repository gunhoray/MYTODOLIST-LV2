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

// text-transform
