import './Sidebar.css'
import BorderButton from '../BorderButton'
import deleteIcon from '../../images/icon-delete.svg'

function SidebarRight (props) {

    const handleDelete = () => {
        console.log("Clicked")
        const noteData = {
            title: props.note.title,
            tags: props.note.tags.map(tag => tag.trim()),
            content: props.note.content,
            lastEdited: props.note.lastEdited
        }
        console.log('Deleted note data:', noteData)
    }

    return (
        <div className="sidebar sidebar-right">
            <BorderButton icon={deleteIcon} text="Delete" textPreset="text-preset-4" onClick={handleDelete}/>
        </div>
    )
}

export default SidebarRight