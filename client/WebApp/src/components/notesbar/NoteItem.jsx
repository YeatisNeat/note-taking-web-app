import './NoteItem.css'

function NoteItem (props) {
    const tags = props.tags

    function handleClick() {
        props.handleCurrentNote(props.note)
        console.log(props.note)
    }
    
    return (
        <div className="note-item" onClick={handleClick}>
            <p className="note-title text-preset-3">{props.noteTitle}</p>
            <div className="tag-container">
                <ul className="tags-list">
                    {tags.map((tag, index) => {
                       return <div className="tag-list-div"><li key={index} className="text-preset-6 tag-list-item">{tag}</li></div>
                    })}
                </ul>
            </div>
            <p className="note-date text-preset-6">{props.date}</p>
        </div>
    )
}

export default NoteItem