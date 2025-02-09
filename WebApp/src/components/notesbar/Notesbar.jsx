import './Notesbar.css'
import PrimaryButton from "../PrimaryButton"
import NoteItem from "./NoteItem"




function Notesbar (props) {
    console.log(props)
   

    return (
        <div className="notesbar">
            <div className='notesbar-button'><PrimaryButton textPreset="text-preset-4" text="+ Create New Note" /></div>
            <div className="notes-content">
               {props.data.map((note, index) => {
                return (
                    <>
                    <div className="note-item"><NoteItem noteTitle={note.title} date={note.lastEdited} tags={note.tags}/></div>
                    <hr className="divider" />
                    </>
                )
               })}
                
            </div>
        </div>
    )
}

export default Notesbar