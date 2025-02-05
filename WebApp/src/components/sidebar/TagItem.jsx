import './TagItem.css'
import homeIcon from '../../images/icon-home.svg'


function TagItem (props) {
    return (
        <>
            <div className="tag-item" tabIndex={0}>
                <img src={homeIcon} alt="" />
                <p className="tag-item-text text-preset-4">{props.text}</p>
            </div>
        </>
    )
}

export default TagItem