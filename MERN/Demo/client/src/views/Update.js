import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default props => {
    const { id } = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            })
    }, [])

    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/people/' + id, {
            firstName,
            lastName
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>First Name</label><br />
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}