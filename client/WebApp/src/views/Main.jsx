import {useState, useEffect} from 'react'
import Sidebar from '../components/sidebar/Sidebar.jsx'
import SidebarRight from '../components/sidebar/SidebarRight.jsx'
import Notesbar from '../components/notesbar/Notesbar.jsx'
import NoteDetails from '../components/NoteDetails.jsx'

import data from '../data.json';

function Main () {
    const [category, setCategory] = useState('All Notes')
    // const [filteredData, setFilteredData] = useState([])
    const [filteredData, setFilteredData] = useState(data.notes)
    const [currentNote, setNote] = useState(null)

    console.log(currentNote)

    useEffect ( ()=>  {
        
        const newFIlteredData = data.notes.filter( note => {
            if (category == 'All Notes') return data.notes
            return note.tags.includes(category)
        }) 
        setFilteredData(newFIlteredData)
    }, [category])
    
    

    const handleCategory = (category) => {
        setCategory(category)
        
    }

    return (
        <>
            <Sidebar handleCategory={handleCategory}/>
            <Notesbar data={filteredData} setNote={setNote}/>
            <NoteDetails note={currentNote}/>
            <SidebarRight note={currentNote}/>
        </>
        
    )
}

export default Main