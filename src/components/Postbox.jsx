const PostBox = ({postInput, handleToggleBox, handleDeleteBox}) => {

    return (
        <div key={postInput.id} className="post-style">
            <div>  
                {postInput.title}
            </div>
            <div className='contentsize'>
                {postInput.content}
            </div>
            <div className="workbuttonbox">
                <button className="workbutton" onClick={()=>handleDeleteBox(postInput.id)}>DELETE</button> 
                <button className="workbutton" onClick={()=>handleToggleBox(postInput.id)}>{ postInput.isDone ? "NOT COMPLETED" : "COMPLETED"}</button>
            </div>
        </div>
    );

};

export default PostBox;

// text-transform