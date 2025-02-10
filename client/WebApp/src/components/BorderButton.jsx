import './BorderButton.css'


function BorderButton (props) {
    return (
        <button className={`border-button ${props.textPreset}`} onClick={props.onClick}>
            <div>
                <img src={props.icon}></img>
            </div>
            
            {props.text}</button>
    )
}

export default BorderButton