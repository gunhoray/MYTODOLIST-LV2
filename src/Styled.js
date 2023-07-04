import styled from "styled-components";

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

export const Container = styled.div`
    max-width: 1200px;
    min-width: 800px;
    border-style: solid;
    border-width: 6px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const BtnAdd = styled.button`
    background-color: black;
    border: solid;
    border-color: black;
    color: white;
    font-size: 35px;
`;

export const BtnWork = styled.button`
    background-color: white;
    border: none;
    cursor: pointer;
    font-size: 20px;
    margin: 5px;
    width: 48%;
`;

export const BtnWorkBox = styled.div`
    text-align: center;
`;

export const Input = styled.input`
    width: 40%;
    padding: 5px 5px;
    border: none;
    background-color: black;
    color: white;
    margin: 3px;
    font-size: 20px;
`;

export const InProgressBox = styled.div`
    text-align: center;
    font-size: 30px;
    padding-bottom: 5px;
    border-width: 6px;
    border-style: solid;
    font-weight: bold;
`;

export const CompletedBox = styled.div`
    padding-bottom: 5px;
    text-align: center;
    font-size: 30px;
    border-width: 6px;
    border-style: solid;
    font-weight: bold;
`;

export const Content = styled.div`
    font-size: 20px;
`;

export const DetailedBox = styled.div`
    background-color: white;
    padding-bottom: 0%;
    border-width: 6px;
    border-style: solid;
`;

export const DetailedId = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid;
    border-color: black;
    color: white;
    font-size: 10px;
    background-color: black;
`;

export const DetailedTitle = styled.div`
    font-size: 30px;
    background-color: white;
    font-weight: bold;
`;

export const DetailedContent = styled.div`
    background-color: black;
    color: white;
    border: solid;
    border-color: black;
    font-size: 20px;
    font-weight: bold;
`;

export const DetailedBtn = styled.button`
    margin-left: auto;
    background-color: black;
    border: solid;
    border-color: black;
    color: white;
    font-size: 20px;
    cursor: pointer;
`;

export const PostBtn = styled.button`
    background-color: black;
    border: solid;
    border-color: black;
    color: white;
    font-size: 35px;
    cursor: pointer;
`;

export const PostTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 30px;
    background-color: black;
`;

export const NotFoundBox = styled.div`
    display: flex;
    background-color: black;
    color: black;
    padding-bottom: 5px;
    border-width: 6px;
    border-style: solid;
`;
