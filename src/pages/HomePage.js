import '../styles.css'
import DBFirebase from '../services/DBFirebase';

import { useEffect, useState } from 'react';
import { getDocs, collection } from "firebase/firestore";

function HomePage(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const userCollectionRef = collection(DBFirebase(), 'numbers')
        const getUser = async () => {
            const data = await getDocs(userCollectionRef)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        
        }
        getUser()
        
    },)


    
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
                    {users.map((num)=>{
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