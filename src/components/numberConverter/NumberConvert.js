import { FaRegSave } from 'react-icons/fa';
import { porExtenso } from 'numero-por-extenso';
import './NumberConvert.css'


function NumberConverter({number, setNumber, saveNumber}){
    
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    } 
    async function convertNumber(e){
        e.preventDefault()
        try {
            if(isNumber(number)){
                saveNumber(String(number), porExtenso(String(number)))
            }
            else{
                alert('Conteudo digitado não corresponde a um valor númerico');
            }
        } catch {
            alert('Ocorreu um erro ao coverter o número!')
        }
        setNumber('');
    }

    return(
        <div className='containerInput'>
            <input 
                type='text'
                placeholder='Insira um número...'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button className='buttonSave' onClick={convertNumber}>
                <FaRegSave size={25} color='#FFF'/>
            </button>
        </div>
    )
}

export default NumberConverter;