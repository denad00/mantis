//icon import
import {FaRegCheckCircle} from 'react-icons/fa'

//imports from React Bootstrap
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'

//imports from react-router-dom
import { useLocation } from 'react-router-dom';

//imports from react
import { useEffect, useState } from 'react';

const Confirmation = () => {
    const location = useLocation();
    const [flag, setFlag] = useState(null)

    useEffect(() => {
        const getFlag = async() => {
            const res = await fetchFlag();
            setFlag(res);
        }
        getFlag();
    }, [])

    //get country flag
    const fetchFlag = async () => {
        const response = await fetch(`https://countryflagsapi.com/png/${location.state.country}`)
        const data = response.json()
        console.log(data);

        if(response.ok){
            return data
        }
    }

    return(
        <div className="confirmation">
            <FaRegCheckCircle />
            <h2>Thank you!</h2>
            <p>You have been registered for this event</p>
            <Table>
                <thead>
                    <tr>
                        <th>The following information has been saved:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{location.state.firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{location.state.lastName}</td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td>{location.state.phone}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{location.state.email}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{location.state.age}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td><Image src={flag}/></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Confirmation;