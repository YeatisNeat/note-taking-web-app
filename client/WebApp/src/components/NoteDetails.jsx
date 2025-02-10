import { useRef } from 'react'
import './NoteDetails.css'
import TagIcon from '../images/icon-tag.svg'
import ClockIcon from '../images/icon-clock.svg'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import axios from 'axios'

function NoteDetails(props) {
    const titleInputRef = useRef(null)
    const tagsInputRef = useRef(null)
    const contentInputRef = useRef(null)

    const handleSave = () => {
        console.log("Clicked")
        const noteData = {
            title: titleInputRef.current.value,
            tags: tagsInputRef.current.value.split(',').map(tag => tag.trim()),
            content: contentInputRef.current.value,
            lastEdited: new Date().toLocaleString()
        }
        console.log(noteData)
        axios.post("http://localhost:8080/api", noteData)

    }

    const handleCancel = () => {
        
        titleInputRef.current.value = ''
        tagsInputRef.current.value = ''
        contentInputRef.current.value = ''
    }

    if (props.note == null) {
        return (
            <div className="note-details">
                <input
                    className="text-preset-1 note-details-title"
                    placeholder="Title"
                    ref={titleInputRef}
                />
                <div className="note-details-tag-list">
                    <div className="note-details-tag-icon-container">
                        <img src={TagIcon} className="note-details-img" alt="Tag" />
                        <p className="text-preset-5">Tags</p>
                    </div>
                    <input
                        type="text"
                        className="note-details-tags-input"
                        placeholder="Enter tags (comma-separated)"
                        ref={tagsInputRef}
                    />
                </div>
                <div className="note-details-last-edited">
                    <div className="note-details-tag-icon-container">
                        <img src={ClockIcon} className='note-details-img' alt="Clock" />
                        <p className="text-preset-5">Last edited</p>
                    </div>
                    <p className="note-details-date text-preset-5">Now</p>
                </div>
                <hr className="divider note-details-divider" />
                <textarea
                    className="note-details-content-text"
                    placeholder="Content"
                    rows="10"
                    ref={contentInputRef}
                />
                <hr className="divider note-details-divider" />
                <div className="note-details-buttons-container">
                    <PrimaryButton
                        textPreset='text-preset-4'
                        text='Save Note'
                        onClick={handleSave}
                    />
                    <SecondaryButton
                        textPreset='text-preset-4'
                        text='Cancel'
                        onClick={handleCancel}
                    />
                </div>
            </div>
        )
    } else {
       
        return (
            <div className="note-details">
                <h1 className="text-preset-1 note-details-title">{props.note.title}</h1>
                <div className="note-details-tag-list">
                    <div className="note-details-tag-icon-container">
                        <img src={TagIcon} className="note-details-img" alt="Tag" />
                        <p className="text-preset-5">Tags</p>
                    </div>
                    <ul className="note-details-tags-ul">
                        {props.note.tags.map((tag, index) => (
                            <li key={index} className='note-details-tag-name text-preset-5'>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="note-details-last-edited">
                    <div className="note-details-tag-icon-container">
                        <img src={ClockIcon} className='note-details-img' alt="Clock" />
                        <p className="text-preset-5">Last edited</p>
                    </div>
                    <p className="note-details-date text-preset-5">{props.note.lastEdited}</p>
                </div>
                <hr className="divider note-details-divider" />
                <div className="note-details-content">
                    <p className="note-details-content-text">{props.note.content}</p>
                </div>
                <hr className="divider note-details-divider" />
                <div className="note-details-buttons-container">
                    <PrimaryButton textPreset='text-preset-4' text='Save Note' />
                    <SecondaryButton textPreset='text-preset-4' text='Cancel' />
                </div>
            </div>
        )
    }
}

export default NoteDetails