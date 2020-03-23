import React from "react";

const RegisterForm = props => {
    const { inputs, setInputs } = props;

    const onChangeHandler = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }
    return (
        <div>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="firstName">First Name</label></td>
                            <td><input type="text" name="firstName" onChange={onChangeHandler} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="lastName">Last Name</label></td>
                            <td><input type="text" name="lastName" onChange={onChangeHandler} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td><input type="email" name="email" onChange={onChangeHandler} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td><input type="password" name="password" onChange={onChangeHandler} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="confirm">Confirm Password</label></td>
                            <td><input type="password" name="confirm" onChange={onChangeHandler} /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default RegisterForm;