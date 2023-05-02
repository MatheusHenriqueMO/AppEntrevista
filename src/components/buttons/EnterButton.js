import { Link } from 'react-router-dom';
import './EnterButton.css';

function EnterButton ({text, link}){
    return (
        <div className='containerButton'>
            <Link to={link}>
                <button className="enterButton">{text}</button>
            </Link>
        </div>
    )
}

export default EnterButton;