import React, { useState } from 'react';

export default props => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ title, price, description });
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td><label>Title:</label></td>
                        <td><input
                            className="form-control"
                            name="title"
                            value={title}
                            type="text"
                            onChange={(e) => setTitle(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label>Price($):</label></td>
                        <td><input
                            className="form-control"
                            name="price"
                            value={price}
                            type="number"
                            step=".01"
                            onChange={(e) => setPrice(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label>Description:</label></td>
                        <td><textarea
                            className="form-control"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}></textarea></td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}
