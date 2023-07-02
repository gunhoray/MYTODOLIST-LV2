import styled from "styled-components";

// Inputbox
export const StyledInputBox = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    padding-left: 5px;
    border-width: 6px;
    border-style: solid;
    font-weight: bold;
`;

export const StyledPostBox = styled.div`
    background-color: black;
    color: white;
    font-size: 30px;
    font-weight: bold;
    border-color: black;
    border-width: 6px;
    border-style: solid;
`;

// title
export const Title = styled.h1`
    background-color: black;
    border-color: black;
    color: white;
    font-size: 100px;
    border-width: 6px;
    border-style: solid;
    margin: 0;
    text-align: center;
    & > span {
        font-size: 15px;
    }
`;

//wholebox
export const Container = styled.div`
    max-width: 1200px;
    min-width: 800px;
    border-style: solid;
    border-width: 6px;
`;

//centered-container
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

// . addbutton
export const BtnAdd = styled.button`
    background-color: black;
    border: solid;
    border-color: black;
    color: white;
    font-size: 35px;
`;

// . workbutton
export const BtnWork = styled.button`
    background-color: white;
    border: none;
    cursor: pointer;
    font-size: 20px;
    margin: 5px;
    width: 48%;
`;

//.workbuttonbox
export const BtnWorkBox = styled.div`
    text-align: center;
`;

// input[type=text]
export const Input = styled.input`
    width: 40%;
    padding: 5px 5px;
    border: none;
    background-color: black;
    color: white;
    margin: 3px;
    font-size: 20px;
`;

//inprogressbox
export const InProgressBox = styled.div`
    text-align: center;
    font-size: 30px;
    padding-bottom: 5px;
    border-width: 6px;
    border-style: solid;
    font-weight: bold;
`;

//.completedbox
export const CompletedBox = styled.div`
    padding-bottom: 5px;
    text-align: center;
    font-size: 30px;
    border-width: 6px;
    border-style: solid;
    font-weight: bold;
`;

// contentsize
export const Content = styled.div`
    font-size: 20px;
`;
