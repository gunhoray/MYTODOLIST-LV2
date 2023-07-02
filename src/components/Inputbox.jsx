import React, { useState } from "react";
import { StyledInputBox, Input, BtnAdd } from "../Styled";

const InputBox = ({ addBtnHandler }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const titleHandler = (event) => {
        setTitle(event.target.value);
    };
    const contentHandler = (event) => {
        setContent(event.target.value);
    };

    const handleClick = () => {
        addBtnHandler(title, content);
    };

    return (
        <StyledInputBox>
            TITLE <Input type="text" value={title} onChange={titleHandler} />
            CONTENT <Input type="text" value={content} onChange={contentHandler} />
            <BtnAdd onClick={handleClick}>+</BtnAdd>
        </StyledInputBox>
    );
};

export default InputBox;
