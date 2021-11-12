import React,{ useState, useEffect } from 'react';
import { Form , Button } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update() {
    let navigate = useNavigate();
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [ID,setID] = useState(null);

    console.log(firstname);
    console.log(lastname);

    const sendDataToAPI = () => {
        axios.put(`https://618cc53fedab980017fd4fdc.mockapi.io/crud/${ID}`,{
            firstname,
            lastname
        }).then(() => {
            navigate('/read')
        })
    }

    const onClickBack = () => {
        navigate('/read')
    }

    useEffect(() => {
        setFirstName(localStorage.getItem('FirstName'))    
        setLastName(localStorage.getItem('LastName')) 
        setID(localStorage.getItem('ID'))      
    },[])  

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname" value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name="lname" value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder="First Name" />
                </Form.Field>
                <Button color="yellow" type ="sumbit" onClick={sendDataToAPI}>Update</Button>
                <Button color="blue" type ="sumbit" onClick={onClickBack}>Back  </Button>
            </Form>
        </div>
    )
}
