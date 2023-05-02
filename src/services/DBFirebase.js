
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

function DBFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyBFLcuaVa_uy2-dJveGehLzB3VCSZKTlUk",
        authDomain: "reactproject-ce173.firebaseapp.com",
        projectId: "reactproject-ce173",
    };
    const firebaseApp = initializeApp(firebaseConfig)
    const db = getFirestore(firebaseApp)
    return db
}

export default DBFirebase