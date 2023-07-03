import React,{useState} from "react";

const InputBox = ({addBtnHandler}) => {


    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    
    const titleHandler=(event)=>{setTitle(event.target.value)};
    const contentHandler=(event)=>{setContent(event.target.value)};

    const handleClick = () => {
        addBtnHandler(title, content);
        setTitle("");
        setContent("");
      };

    return (
        <div className='inputsection'>
        TITLE  <input type='text' value={title} onChange={titleHandler}/>
        CONTENT  <input type='text' value={content} onChange={contentHandler}/>
        <button className="addbutton"onClick={handleClick}>+</button>
      </div>
    );
};

export default InputBox;