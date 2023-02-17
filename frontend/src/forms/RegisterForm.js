//imports from react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';
import Col from 'react-bootstrap/Col';

//imports from react
import { useState } from 'react';

//imports from react-router-dom
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [age, setAge] = useState(18);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const minAge = 18;
    const maxAge = 99;

    let navigate = useNavigate();

    const submitForm = () => {
        console.log(firstName, lastName, phone, email, age, country)
        navigate(`/confirmation`,{state:{firstName: firstName, lastName: lastName, phone: phone, email: email, age: age, country: country}})

        // event.preventDefault();
    }

    return(
        <div className="register-form">
            <Form>
                <Col className = "form-input">
                <h2>Please fill out this form to register</h2>
                <Form.Group className="form-input" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="John" 
                        required
                        onChange={changeEvent => setFirstName(changeEvent.target.value)}
                    />
                </Form.Group>
                <Form.Group className="form-input" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Smith" 
                        required
                        onChange={changeEvent => setLastName(changeEvent.target.value)}
                    />
                </Form.Group>
                <Form.Group className="form-input" controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
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
                        placeholder="email@email.coml" 
                        required
                        onChange={changeEvent => setEmail(changeEvent.target.value)}
                    />
                </Form.Group>
                <Form.Group className="form-input" controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <RangeSlider 
                        value={age}
                        onChange={changeEvent => setAge(changeEvent.target.value)}
                        min={minAge}
                        max={maxAge}
                    />
                </Form.Group>
                <Form.Group className="form-input" controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="enter your country" 
                        required
                        onChange={changeEvent => setCountry(changeEvent.target.value)}
                    />
                </Form.Group>
                <Form.Group className="form-input" controlId="formCheckBox">
                    <Form.Check 
                        required 
                        type="checkbox" 
                        label="I certify that I am at least 18 years or older" 
                    />
                </Form.Group>
                <Button type="submit" onClick={submitForm}>Submit</Button>
                </Col>
            </Form>
        </div>
    )
}

export default RegisterForm;