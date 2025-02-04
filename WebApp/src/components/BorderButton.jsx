import './BorderButton.css'


function BorderButton (props) {
    return (
        <button className={`border-button ${props.textPreset}`}>
            <div>
                <img src="../images/icon-restore.svg"></img>
            </div>
            
            {props.text}</button>
    )
}

export default BorderButton