import React,{ useState } from 'react';
import { Form , Button } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    let navigate = useNavigate();
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    console.log(firstname);
    console.log(lastname);

    const sendDataToAPI = () => {
        axios.post(`https://618cc53fedab980017fd4fdc.mockapi.io/crud`,{
            firstname,
            lastname
        }).then(() => {
            navigate('/read')
        })
    }
    const onClickBack = () => {
        navigate('/read')
    }

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name="lname" onChange={(e) => setLastName(e.target.value)} placeholder="First Name" />
                </Form.Field>
                <Button color="green" type ="sumbit" onClick={sendDataToAPI}>Sumbit</Button>
                <Button color="blue" type ="sumbit" onClick={onClickBack}>Back  </Button>
            </Form>
        </div>
    )
}
