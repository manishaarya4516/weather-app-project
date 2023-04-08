import styled from "styled-components";

export const HeaderStyle = styled.div`
    display:flex;
    justify-content:space-between;
background:${(props) => (props.theme === "light" ? "purple" : "black")};
    height:50px;
    width:calc(100% - 80px);
    position:fixed;
    top:0;
    .logo{
        font-size:30px;
        color:red;
        padding:6px;
    }
    // .btn{
    //     border:1px solid red;
    //     padding:5px;
    //     margin:5px;
    //     border-radius:5px;
    //     cursor:pointer;
    // }

`;