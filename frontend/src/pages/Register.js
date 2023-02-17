import RegisterForm from "../forms/RegisterForm";

const Register = () => {
    return(
        <div className="register" data-testid="register">
            <h1>Register for the Event!</h1>
            <RegisterForm />
        </div>
    )
}

export default Register;