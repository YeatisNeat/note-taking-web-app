import {useState} from 'react'
import './Notesbar.css'
import PrimaryButton from "../PrimaryButton"
import NoteItem from "./NoteItem"




function Notesbar (props) {

   const createNewNote = () => {
        props.setNote(null)
   }
    

    return (
        <div className="notesbar">
            <div className='notesbar-button'><PrimaryButton textPreset="text-preset-4" text="+ Create New Note" onClick={createNewNote} /></div>
            <div className="notes-content">
               {props.data.map((note, index) => {
                return (
                    <>
                    <div className="note-item"><NoteItem note={note} noteTitle={note.title} date={note.lastEdited} tags={note.tags} handleCurrentNote={props.setNote}/></div>
                    <hr className="divider" />
                    </>
                )
               })}
                
            </div>
        </div>
    )
}

export default Notesbar