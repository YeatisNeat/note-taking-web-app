import './Sidebar.css'
import logo from '../../images/logo.svg'
import TagItem from './TagItem.jsx'
import homeIcon from '../../images/icon-home.svg'
import tagIcon from '../../images/icon-tag.svg'

function Sidebar (props) {
    
    return (
        <div className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="" className="logo" />
            </div>

            <div className="content">
                <div className="sidebar-top">
                    <TagItem text="All Notes" handleCategory={props.handleCategory} icon={homeIcon}/>
                </div>
                <hr className="divider" />

                <div className="sidebar-bottom">
                    <p className="text-preset-4 tag-p">Tags</p>
                    <div className="tags-container">
                        <TagItem text="Cooking" handleCategory={props.handleCategory} icon={tagIcon}/>
                        <TagItem text="Dev" handleCategory={props.handleCategory} icon={tagIcon}/>
                        <TagItem text="Fitness" handleCategory={props.handleCategory} icon={tagIcon}/>
                        <TagItem text="Health" handleCategory={props.handleCategory} icon={tagIcon}/>
                        <TagItem text="Personal" handleCategory={props.handleCategory} icon={tagIcon}/>
                        <TagItem text="React" handleCategory={props.handleCategory} icon={tagIcon}/>
                        <TagItem text="Recipes" handleCategory={props.handleCategory} icon={tagIcon}/>
                        <TagItem text="Shopping" handleCategory={props.handleCategory} icon={tagIcon}/>
                        <TagItem text="Travel" handleCategory={props.handleCategory} icon={tagIcon}/>
                        <TagItem text="TypeScript" handleCategory={props.handleCategory} icon={tagIcon}/>
                    
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar