import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Spacechips = ({ id }) => {
    const [responseData, setResponseData] = useState([]);

    console.log(id);
    useEffect(() => {
        axios.get('https://swapi.co/api/starships/' + id)
            .then(res => { setResponseData(res.data) });
    }, [id]);

    return (
        <div className="container mt-2">
            <h1 className="display-4">{responseData.name}</h1>
            <table>
                <tbody>
                    <tr>
                        <td className="font-weight-bold">Model:</td>
                        <td>{responseData.model}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Manufacturer:</td>
                        <td>{responseData.manufacturer}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Starship Class:</td>
                        <td>{responseData.starship_class}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Cost:</td>
                        <td>{responseData.cost_in_credits} credits</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Length:</td>
                        <td>{responseData.length} m</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Crew:</td>
                        <td>{responseData.crew}</td>
                    </tr>
                    <tr>
                        <td className="font-weight-bold">Hyperdrive Rating:</td>
                        <td>{responseData.hyperdrive_rating}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Spacechips;