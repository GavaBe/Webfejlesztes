import React, {useEffect, useState} from "react";
import "bootstrap"
import axios from "axios";
import "./Telefonok.css"
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const Telefonok =()=>{

    const [telefonok, setTelefonok] = useState([]);

    useEffect(() => {
        const fetchAllTelefonok = async () => {
            try {
                const res = await axios.get("http://localhost:8800/telefon");
                setTelefonok(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllTelefonok();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/telefon/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };


    return(
        <div>
            <h1>Mobiles database</h1>
            <table class="table table-dark table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Company</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Owner</th>
                    <th>Options</th>
                </tr>
                </thead>
                        <tbody className="telefonok">
                            {telefonok.map((telefon) => (
                            <tr>
                                <td>{telefon.id}</td>
                                <td>{telefon.company}</td>
                                <td>{telefon.type}</td>
                                <td>{telefon.desc}</td>
                                <td>{telefon.owner}</td>
                                <div className="gombok">
                                    <Button className="Delete" onClick={() => handleDelete(telefon.id)}>Delete</Button>
                                    <Button className="Update"><Link to={`/update/${telefon.id}`}>Update</Link></Button>
                                </div>
                            </tr>
                            ))}
                        </tbody>
            </table>
                <div className="stl">
                    <Button className="Add"><Link to="/add">Add</Link></Button>
                </div>
        </div>


    )
}

export default Telefonok;