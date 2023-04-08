import styled from "styled-components";
export const SidebarStyle = styled.div`
display:flex;
height:100vh;
width:80px;
background:${(props) => (props.theme === "light" ? "purple" : "black")};
position:fixed;
flex-direction:column;
top:0;
left:0;
.tab-container{
    display:flex;
    width:100%;
    height:30px;
    align-items:center;
    justify-content:center;
    border-bottom:1px solid red;
    cursor:pointer;
    
}
.selected-tab-container{
    background-color:yellow;
}
.darkTheme{
    margin-top:200px;
    border:1px solid red;
    background-color:grey;
    color:white;
    height:30px;
    align-items:center;
    justify-content:center;
    display:flex;
    cursor:pointer;
}

`;