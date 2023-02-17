//icon import
import {FaRegCheckCircle} from 'react-icons/fa';

//imports from React Bootstrap
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

//imports from react-router-dom
import { useLocation } from 'react-router-dom';

//imports from react
import { useEffect, useState } from 'react';

const Confirmation = () => {

    //variables
    const location = useLocation();
    const [flag, setFlag] = useState(null)

    useEffect(() => {
        fetchFlag()
    });

    //get country flag
    const fetchFlag = async () => {
        const response = await fetch(`https://countryflagsapi.com/png/${location.state.country}`)
        const data = response.url
        setFlag(data);

        if(response.ok){
            return data
        }
    }

    return(
        <div className="confirmation" data-testid="confirmation">
            <FaRegCheckCircle />
            <h2>Thank you!</h2>
            <p>You have been registered for this event</p>
            <p>The following information has been saved:</p>
            <Table striped bordered>
                <tbody>
                    <tr>
                        <td><span>First Name</span></td>
                        <td>{location.state.firstName}</td>
                    </tr>
                    <tr>
                        <td><span>Last Name</span></td>
                        <td>{location.state.lastName}</td>
                    </tr>
                    <tr>
                        <td><span>Phone Number</span></td>
                        <td>{location.state.phone}</td>
                    </tr>
                    <tr>
                        <td><span>Email</span></td>
                        <td>{location.state.email}</td>
                    </tr>
                    <tr>
                        <td><span>Age</span></td>
                        <td>{location.state.age}</td>
                    </tr>
                    <tr>
                        <td><span>Country</span></td>
                        <td><Image crossOrigin = "anonymous" src={flag} thumbnail/></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Confirmation;