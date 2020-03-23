import React, { useState } from 'react';

const Form = props => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: "",
    });

    const onChangeHandler = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="container">
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="firstName">First Name</label></td>
                            <td><input onChange={onChangeHandler} type="text" name="firstName" id="firstName" /></td>
                            {(state.firstName.length !== 0 && state.firstName.length < 2) && <p>First name must be at least 2 characters</p>}
                        </tr>
                        <tr>
                            <td><label htmlFor="lastName">Last Name</label></td>
                            <td><input onChange={onChangeHandler} type="text" name="lastName" id="lastName" /></td>
                            {(state.lastName.length !== 0 && state.lastName.length < 2) && <p>Last name must be at least 2 characters</p>}
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td><input onChange={onChangeHandler} type="email" name="email" id="email" /></td>
                            {(state.email.length !== 0 && state.email.length < 5) && <p>Email must be at least 5 characters</p>}
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td><input onChange={onChangeHandler} type="password" name="password" id="password" /></td>
                            {(state.password.length !== 0 && state.password.length < 8) && <p>Password must be at least 8 characters</p>}
                        </tr>
                        <tr>
                            <td><label htmlFor="confirm">Confirm Password</label></td>
                            <td><input onChange={onChangeHandler} type="password" name="confirm" id="confirm" /></td>
                            {(state.confirm !== state.password) && <p>Password must match confirmation</p>}
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Form;