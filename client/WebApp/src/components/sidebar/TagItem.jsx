import './TagItem.css'
import homeIcon from '../../images/icon-home.svg'


function TagItem (props) {

    return (
        <>
            <div className="tag-item" tabIndex={0} onClick={() => props.handleCategory(props.text)}>
                <img src={props.icon} alt="" />
                <p className="tag-item-text text-preset-4">{props.text}</p>
            </div>
        </>
    )
}

export default TagItem