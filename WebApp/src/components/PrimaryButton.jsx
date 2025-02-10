import './PrimaryButton.css'

function PrimaryButton (props) {
    return (
        <button onClick={props.onClick} className={`primary-button ${props.textPreset}`}>{props.text}</button>
    )
}

export default PrimaryButton