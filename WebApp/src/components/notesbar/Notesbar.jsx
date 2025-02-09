
import PrimaryButton from "../PrimaryButton"
import NoteItem from "./NoteItem"

function Notesbar () {
    return (
        <div className="notesbar">
            <PrimaryButton textPreset="text-preset-4" text="+ Create New Note" />
            <div className="notes-content">
                <NoteItem noteTitle="React Performance Optimization" date="29 Oct 2024" />
            </div>
        </div>
    )
}

export default Notesbar