import {useState, useEffect} from 'react'
import Sidebar from '../components/sidebar/Sidebar.jsx'
import Notesbar from '../components/notesbar/Notesbar.jsx'

import data from '../data.json';

function Main () {
    const [category, setCategory] = useState('All Notes')
    const [filteredData, setFilteredData] = useState([]);

    useEffect ( ()=>  {
        console.log(category)
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
            <Notesbar data={filteredData}/>
        </>
        
    )
}

export default Main