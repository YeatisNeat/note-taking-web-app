import './NoteItem.css'

function NoteItem (props) {
    return (
        <div className="note-item">
            <p className="note-title text-preset-3">{props.noteTitle}</p>
            <div className="tag-container">

            </div>
            <p className="note-date text-preset-6">{props.date}</p>
        </div>
    )
}

export default NoteItem