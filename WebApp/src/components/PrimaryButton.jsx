import './PrimaryButton.css'

function PrimaryButton (props) {
    return (
        <button className={`primary-button ${props.textPreset}`}>{props.text}</button>
    )
}

export default PrimaryButton