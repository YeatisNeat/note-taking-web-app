import './Modal.css'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

function Modal (props) {
    return (
        <>
            <div className="top">
                <div className="icon-container"></div>
                <div className="content">
                    <p className="header-text text-preset-3">{props.headerText}</p>
                    <p className="body-text text-preset-5">{props.bodyText}</p>
                </div>
                
            </div>

            <hr className='divider'></hr>

            <div className="bottom">
                <SecondaryButton textPreset="text-preset-4" text="Cancel"/>
                <PrimaryButton textPreset="text-preset-4" text="Delete Note"/>
            </div>

        </>
    )
}

export default Modal