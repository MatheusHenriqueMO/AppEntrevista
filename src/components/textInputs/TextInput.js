import SpacingBottom from '../spacings/SpacingBottom';

import './TextInput.css';

function TextInput({type, placeholder, name, setValue ,value}){
    return (
        <>
            <div className='containerInput'>
                <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={(e) => setValue(e)}
                value={value}
                />
            </div>
            <SpacingBottom/>
        </>
    );
}

export default TextInput;