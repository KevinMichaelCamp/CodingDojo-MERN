import React, { useReducer } from 'react';

const Form = props => {
    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    }

    function reducer(state, action) {
        return {
            ...state,
            [action.type]: action.payload
        };
    }


    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }



    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="firstName">First Name</label></td>
                        <td><input type="text" name="firstName" value={state.name} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="lastName">Last Name</label></td>
                        <td><input type="text" name="lastName" value={state.name} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email</label></td>
                        <td><input type="text" name="email" value={state.name} onChange={handleChange} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Form;