//imports from react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';

//imports from react
import { useState } from 'react';

//imports from react-router-dom
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [validated, setValidated] = useState(false);
    const [age, setAge] = useState(18);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const minAge = 18;
    const maxAge = 99;

    let navigate = useNavigate();

    const checkForm = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false){
            event.preventDefault();
            event.stopPropogation();
        } else if (validated === true){
            navigate(`/confirmation`,{state:{firstName: firstName, lastName: lastName, phone: phone, email: email, age: age, country: country}})
        }

        setValidated(true);

        // } else{
        //     setValidated(true);
        //     console.log(firstName, lastName, phone, email, age, country)
        //     navigate(`/confirmation`,{state:{firstName: firstName, lastName: lastName, phone: phone, email: email, age: age, country: country}})
        // }
    }

    return(
        <div className="register-form">
            <Form validated={validated}>
                <h2>Please fill out this form to register</h2>
                <Form.Group className="form-input" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="John" 
                        required
                        onChange={changeEvent => setFirstName(changeEvent.target.value)}
                    />
                    <Form.Control.Feedback>Complete!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please input your First Name</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-input" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Smith" 
                        required
                        onChange={changeEvent => setLastName(changeEvent.target.value)}
                    />
                    <Form.Control.Feedback>Complete!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please input your Last Name</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-input" controlId="formPhoneNumber">
                    <Form.Label>Phone Number (optional)</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="555-555-5555"
                        onChange={changeEvent => setPhone(changeEvent.target.value)}
                    />
                </Form.Group>
                <Form.Group className="form-input" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="email@email.com" 
                        required
                        onChange={changeEvent => setEmail(changeEvent.target.value)}
                    />
                    <Form.Control.Feedback>Complete!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please input your Email</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-input" controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <RangeSlider 
                        value={age}
                        onChange={changeEvent => setAge(changeEvent.target.value)}
                        min={minAge}
                        max={maxAge}
                    />
                    <Form.Control.Feedback>Complete!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please input your Age</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-input" controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Canada" 
                        required
                        onChange={changeEvent => setCountry(changeEvent.target.value)}
                    />
                    <Form.Control.Feedback>Complete!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please input your Country</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-input" controlId="formCheckBox">
                    <Form.Check 
                        required 
                        type="checkbox" 
                        label="I certify that I am at least 18 years or older"
                        feedback="You must agree before you submit"
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit" onClick={checkForm} variant="success">Submit</Button>
            </Form>
        </div>
    )
}

export default RegisterForm;