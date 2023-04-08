import { useState } from "react";
import { Button } from "../Button";
import { NoteStyle } from "./style";

export const Content = () => {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [notes, setNotes] =  useState([]);

    const handleClickInc =()=>{
       if(count>10) {
        return;
       }
       setCount(count + 1);
    }
    const handleClickDec=()=>{
        if(count < 1) {
            return;
           }
           setCount((prevState)=>{
            return prevState - 1;
           })
    }
    const handleTitle=(e)=>{
        setTitle(e.target.value);

    };
    const handleDesc=(e)=>{
        setDescription(e.target.value);
    };
    const handleSave=()=>{
        let obj={
            title:title,
            desc: description
        };
        let temp=[...notes]
        temp.push(obj);
        setNotes(temp);
    };
    console.log(notes);

    return(
        <>
        {count}
        <Button name="inc" handleClick={handleClickInc}/>
        <Button name="dec" handleClick={handleClickDec}/>
        <NoteStyle>
            <input placeholder="title" value={title} onChange={handleTitle}/>
            <input placeholder="description" value={description} onChange={handleDesc}/>
            <Button name="save" handleClick={handleSave} />
        </NoteStyle>
        </>
    );
}