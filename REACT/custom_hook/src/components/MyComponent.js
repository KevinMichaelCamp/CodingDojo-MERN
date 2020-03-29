import React, { useState } from 'react';
import useList from '../hooks/useList';

const MyComponent = () => {
    const [val, setVal] = useState('');
    const [ind, setInd] = useState('');
    const { list, add, remove } = useList(["0", "1"]);

    function handleAdd() {
        add(val);
        setVal('');
    }

    function handleRemove() {
        remove(ind);
        setInd('');
    }

    return (
        <div className="container text-align-center">
            <div className="row">
                <div className="col">
                    <div style={{ width: "500px", margin: "25px" }}>
                        <label className="form-control">Add Item</label>
                        <input
                            className="form-control"
                            onChange={e => setVal(e.target.value)}
                            value={val}
                        />
                        <button className="form-control btn btn-primary mt-2" onClick={handleAdd}>Add</button>
                    </div>

                    <div style={{ width: "500px", margin: "25px" }}>
                        <label className="form-control">Remove Item at Index</label>
                        <input
                            className="form-control"
                            onChange={e => setInd(e.target.value)}
                            value={ind}
                        />
                        <button className="form-control btn btn-danger mt-2" onClick={handleRemove}>Remove</button>
                    </div>
                </div>

                <div className="col">
                    <h1 className="display-4">Item List</h1>
                    {list.map((item, i) => <p key={i}>{item}</p>)}
                </div>
            </div>
        </div>
    );
}

export default MyComponent;