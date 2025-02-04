import './SecondaryButton.css'

function SecondaryButton (props) {
    return (
        <button className={`secondary-button ${props.textPreset}`}>{props.text}</button>
    )
}

export default SecondaryButton