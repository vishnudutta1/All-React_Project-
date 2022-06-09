import React,{useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {addNote} from "../redux/notes/notesSlice";
import nanoid from "nanoid";

function NoteInput() {

const [text,setText] = useState('');
const [bgcolor,setbgcolor] = useState("red");
const dispatch = useDispatch 

  return (
    <div className={"textarea-box"}>
        <textarea className='textarea-input' placeholder='Enter Your Note Here' />
       
    </div>
  )
}

export default NoteInput