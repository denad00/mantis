import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

const RegisterForm = () => {
    const [validated, setValidated] = useState(false);
    const [age, setAge] = useState(18);

    const submitForm = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false){
            event.preventDefault();
            event.stopPropogation();
        }

        setValidated(true);
    }

    return(
        <div className="register-form">
            <Form noValidate validated={validated} onSubmit={submitForm}>
                <h2>Please fill out this form to register</h2>
                <Form.Group className="form-input" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="enter your first name" 
                        required
                    />
                </Form.Group>
                <Form.Group className="form-input" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="enter your last name" 
                        required
                    />
                </Form.Group>
                <Form.Group className="form-input" controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="enter your phone number"
                    />
                </Form.Group>
                <Form.Group className="form-input" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="enter your email" 
                        required
                    />
                </Form.Group>
                <Form.Group className="form-input" controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <RangeSlider 
                        value={age}
                        onChange={changeEvent => setAge(changeEvent.target.value)}
                        min="18"
                        max="99"
                    />
                </Form.Group>
                <Form.Group className="form-input" controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="enter your country" 
                        required
                    />
                </Form.Group>
                <Form.Group className="form-input" controlId="formCheckBox">
                    <Form.Check 
                        type="checkbox" 
                        label="I certify that I am at least 18 years or older" 
                        required 
                        feedback = "You must certify that you are at least 18 years or older"
                        feedbackType = "invalid"
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default RegisterForm;