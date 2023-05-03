import '../styles.css'
import DBFirebase from '../services/DBFirebase';

import { useState } from 'react';
import { getDocs, collection } from "firebase/firestore";

function HomePage(){
    const [numbers, setNumbers] = useState([]);


        
    const getUser = async () => {
        const config = collection(DBFirebase(), 'numbers')
        const data = await getDocs(config)
        setNumbers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        
    }
    getUser()



    
    return(
        <div className='container'>
            <h1 className='title'>Números salvos</h1>
            <table>
                <tr>
                    <div className='titleTable'>
                        <th className='resultNumber'>Nº</th>
                        <th className='separator'>{'-'}</th>
                        <th>Por extenso</th>
                    </div>
                    {numbers.map((num)=>{
                        return(
                            <div key={num.id} className='result'>
                                <td className='resultNumber'>{num.number}</td>
                                <td className='separator'>{'-'} </td>
                                <td>{num.extensive}</td>
                            </div>
                        )
                    })}
                </tr>
            </table>
            

        </div>
    )
}

export default HomePage;