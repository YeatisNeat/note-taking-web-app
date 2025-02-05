import './Sidebar.css'
import logo from '../../images/logo.svg'
import TagItem from './TagItem.jsx'

function Sidebar () {
    return (
        <div className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="" className="logo" />
            </div>

            <div className="content">
                <div className="sidebar-top">
                    <TagItem text="All Notes"/>
                </div>
                <hr className="divider" />

                <div className="sidebar-bottom">
                    <p className="text-preset-4 tag-p">Tags</p>
                    <div className="tags-container">
                        <TagItem text="Cooking" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar