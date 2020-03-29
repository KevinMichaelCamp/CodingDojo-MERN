import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const inputStyle = {
    padding: "10px",
    fontSize: "1em",
    width: "500px"
};

export default () => {
    const { name, setName } = useContext(UserContext);

    return (
        <div style={{ padding: "20px" }}>
            <div>
                <label style={inputStyle} className="form-control">Name</label>
                <input
                    className="form-control"
                    style={inputStyle}
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </div>
        </div>
    )
}


