import './Sidebar.css'
import logo from '../../images/logo.svg'
import TagItem from './TagItem.jsx'

function Sidebar (props) {
    
    return (
        <div className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="" className="logo" />
            </div>

            <div className="content">
                <div className="sidebar-top">
                    <TagItem text="All Notes" handleCategory={props.handleCategory}/>
                </div>
                <hr className="divider" />

                <div className="sidebar-bottom">
                    <p className="text-preset-4 tag-p">Tags</p>
                    <div className="tags-container">
                        <TagItem text="Cooking" handleCategory={props.handleCategory}/>
                        <TagItem text="Dev" handleCategory={props.handleCategory}/>
                        <TagItem text="Fitness" handleCategory={props.handleCategory}/>
                        <TagItem text="Health" handleCategory={props.handleCategory}/>
                        <TagItem text="Personal" handleCategory={props.handleCategory}/>
                        <TagItem text="React" handleCategory={props.handleCategory}/>
                        <TagItem text="Recipes" handleCategory={props.handleCategory}/>
                        <TagItem text="Shopping" handleCategory={props.handleCategory}/>
                        <TagItem text="Travel" handleCategory={props.handleCategory}/>
                        <TagItem text="TypeScript" handleCategory={props.handleCategory}/>
                    
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar