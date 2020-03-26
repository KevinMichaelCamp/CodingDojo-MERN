import React, { useState } from 'react';

const BoxGenerator = props => {
    const [colorState, setColorState] = useState({
        color: ""
    });
    const [lengthState, setLengthState] = useState({
        length: ""
    });
    const [boxesState, setBoxesState] = useState({
        boxes: []
    });

    const onChangeHandler = e => {
        setColorState({
            ...colorState,
            [e.target.name]: e.target.value
        })
        setLengthState({
            ...lengthState,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        const box = [colorState.color, lengthState.length];
        console.log("[New Box] Color: " + colorState.color + " // Length: " + lengthState.length);

        let boxesCopy = boxesState.boxes.slice();
        boxesCopy.push(box);

        setBoxesState({
            boxes: boxesCopy
        });
        setColorState({
            color: ""
        });
        setLengthState({
            length: ""
        });
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="color">Color:</label></td>
                            <td><input type="text" name="color" value={colorState.color} onChange={onChangeHandler} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="length">Length:</label></td>
                            <td><input type="number" name="length" value={lengthState.length} onChange={onChangeHandler} /></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Add Box</button>
            </form>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {boxesState.boxes.map(function (box, i) {
                    let styles = {
                        backgroundColor: box[0],
                        width: box[1] + "px",
                        height: box[1] + "px"
                    }
                    console.log(box[0]);
                    console.log(box[1]);
                    return <div key={i} style={styles}></div>
                })}
            </div>
        </div>
    );
}

export default BoxGenerator;