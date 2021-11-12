import React,{ useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Delete() {
    const [apiData, setApiData] = useState([]);
    useEffect(() =>{
        axios.get(`https://618cc53fedab980017fd4fdc.mockapi.io/crud`)
        .then((getData) => {
            setApiData(getData.data);
        })
    }, [])
    const setData = (data) => {
        let  {id,firstname,lastname} = data;

        console.log(data);
        localStorage.setItem('ID',id)
        localStorage.setItem('FirstName',firstname)
        localStorage.setItem('LastName',lastname)
    }

    const getData = () =>{
        axios.get(`https://618cc53fedab980017fd4fdc.mockapi.io/crud`)
        .then((getData) => {
            setApiData(getData.data)
        })
    }

    const onDelete = (id) => {
        axios.delete(`https://618cc53fedab980017fd4fdc.mockapi.io/crud/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                    {apiData.map((data) => {
                        return(
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstname}</Table.Cell>
                                <Table.Cell>{data.lastname}</Table.Cell>
                                <Table.Cell>
                                    <Link to = '/update'>
                                        <Button color="yellow" onClick={() => setData(data)}>Update</Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                <Link to = '/delete'>
                                    <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                                </Link>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>

            </Table>
        </div>
    )
}
