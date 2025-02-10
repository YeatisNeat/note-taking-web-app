import './SecondaryButton.css'

function SecondaryButton (props) {
    return (
        <button onClick={props.onClick} className={`secondary-button ${props.textPreset}`}>{props.text}</button>
    )
}

export default SecondaryButton