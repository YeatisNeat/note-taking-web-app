import {useState, useEffect} from 'react'
import axios from "axios"
import Sidebar from '../components/sidebar/Sidebar.jsx'
import SidebarRight from '../components/sidebar/SidebarRight.jsx'
import Notesbar from '../components/notesbar/Notesbar.jsx'
import NoteDetails from '../components/NoteDetails.jsx'
import Toast from '../components/Toast.jsx'
import './Main.css'


function Main () {
    
    const [category, setCategory] = useState('All Notes')
    // const [filteredData, setFilteredData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [currentNote, setNote] = useState(null)

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/${category}`)
            setFilteredData(response.data.notes)
        } catch(error) {
            console.error ('Error fetching data:', error)
        }
    }

useEffect(() => {
    
    fetchData()
}, [category])
    
    

    const handleCategory = (category) => {
        setCategory(category)
        
    }

    return (
            
        <div className="cont">
        <div className="container">
            <Sidebar handleCategory={handleCategory}/>
            <Notesbar data={filteredData} setNote={setNote}/>
            <NoteDetails note={currentNote} onRefreash={fetchData}/>
            <SidebarRight note={currentNote} onRefreash={fetchData}/>
            
        </div>
        </div> 
            
            
    )
}

export default Main