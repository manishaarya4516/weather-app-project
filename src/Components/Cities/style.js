import styled from "styled-components";

export const CitiesStyle = styled.div`
    height:calc(100vh - 50px - 20px);
    margin-top:10px;
    width:250px;
    padding:10px;
    margin-left:25px;
    border:1px solid gray;
    box-shadow:2px 2px 2px grey;

    .Plus{
        border:1px solid black;
        width:20px;
        height:20px;
        cursor:pointer;
        border-radius:3px;
        display:flex;
        justify-content:space-between;
        
    }
    .title{
        font-size:20px;
    }
    .city-cell{
        padding:10px;
        border:1px solid red;
        margin-bottom:8px;
    }
`;