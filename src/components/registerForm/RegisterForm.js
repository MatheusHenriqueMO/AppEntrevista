import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import DBFirebase from '../../services/DBFirebase'
import NumberConverter from '../numberConverter/NumberConvert';

import EnterButton from "../buttons/EnterButton"
import'./RegisterForm.css'

function LoginForm(){

    const [number, setNumber] = useState('')

    async function saveNumber(number, extensive){
        try {
            const db = DBFirebase();
            const config = collection(db, 'numbers')

            await addDoc( config, {
                number: number,
                extensive: extensive
            });
            alert('Número salvo com sucesso');
        } catch (error) {
            alert('Ocorreu um erro ao tentar salvar o número!');
        }
        
    }

    return(
        <div>
            <form className="form">
                <div>
                    <NumberConverter 
                        number={number} 
                        setNumber={setNumber} 
                        saveNumber={saveNumber}
                    />
                </div>
                <EnterButton text={'Entrar'} link={'/home'}/>
            </form>
        </div>
    )
}

export default LoginForm;