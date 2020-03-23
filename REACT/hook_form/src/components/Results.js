import React from "react";

const Results = props => {
    const { firstName, lastName, email, password, confirm } = props.data;
    return (
        <div>
            <h4>Results</h4>
            <table>
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td>{firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td>{lastName}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td>{password}</td>
                    </tr>
                    <tr>
                        <td>Password Confirm:</td>
                        <td>{confirm}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Results;

