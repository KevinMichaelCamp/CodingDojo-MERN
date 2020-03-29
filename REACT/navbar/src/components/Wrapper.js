import React, { useState } from 'react';
import UserContext from '../contexts/UserContext';

export default ({ children }) => {
    const [name, setName] = useState("John Doe");

    return (
        <UserContext.Provider value={{ name, setName }}>
            {children}
        </UserContext.Provider>
    )
}