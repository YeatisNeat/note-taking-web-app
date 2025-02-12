import './Sidebar.css'
import BorderButton from '../BorderButton'
import deleteIcon from '../../images/icon-delete.svg'
import axios from 'axios'

function SidebarRight (props) {

    const handleDelete = (e) => {
        const button = e.currentTarget
        button.disabled = true
        console.log("Clicked")
        const noteData = {
            title: props.note.title,
            tags: props.note.tags.map(tag => tag.trim()),
            content: props.note.content,
            lastEdited: props.note.lastEdited
        }
        console.log('Deleted note data:', noteData)

        axios.delete("http://localhost:8080/api", {data: noteData}).then((resposne) => {
            console.log("Note Deleted", response.data)
        }).finally(() => {
            button.disabled = false
            props.onRefreash()
        })
    }

    return (
        <div className="sidebar sidebar-right">
            <BorderButton icon={deleteIcon} text="Delete" textPreset="text-preset-4" onClick={handleDelete}/>
        </div>
    )
}

export default SidebarRight