import './inputfield.css'

function InputField (props){

    return(
        <div classname='input-field'>
           <label className={`input-label ${props.textPreset}`}>
           {props.label}
           </label>

            <input
            type='password'
            classname='input-box'
            placeholder={props.placeholder||'Enter your Password'}
            />

            <p className={`helper-text ${props.textPreset}`}>
                {props.helperText}
            </p>
            
        </div>
    )

}
export default InputField