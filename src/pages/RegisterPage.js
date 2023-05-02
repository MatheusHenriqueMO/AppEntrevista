import '../styles.css'
import RegisterForm from '../components/registerForm/RegisterForm';


function LoginPage(){

    return(
        <>
            <div className="container">
                <h1 className="title">Conversor de número</h1>
                <RegisterForm /> 
                
            </div>
        </>
    )
}

export default LoginPage;