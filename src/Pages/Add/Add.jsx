import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import "./Add.css";


const Add = () => {
        const [telefon, setTelefonok] = useState({
            company: "",
            type: "",
            desc: "",
            owner: "",
        });
        const [error,setError] = useState(false)

        const navigate = useNavigate();

        const handleChange = (e) => {
            setTelefonok((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        };

        const handleClick = async (e) => {
            e.preventDefault();
            try {
                await axios.post("http://localhost:8800/telefon", telefon);
                navigate("/");
            } catch (err) {
                console.log(err);
                setError(true)
            }
        };

    return(
        <div>
            <h1>Add mobile data</h1>
            <form className="add">
                <div className="input-group mb-3">
                    <span className="input-group-text">Company</span>
                    <input type="text" name="company" className="form-control" onChange={handleChange} placeholder="Company"></input>
                </div>
                <br/>
                <div className="input-group mb-3">
                    <span className="input-group-text">Type</span>
                    <input type="text" name="type" className="form-control" onChange={handleChange} placeholder="Type"></input>
                </div>
                <br/>
                <div className="input-group mb-3">
                    <span className="input-group-text">Description</span>
                    <input type="text" name="desc" className="form-control" onChange={handleChange} placeholder="Description"></input>
                </div>
                <br/>
                <div className="input-group mb-3">
                    <span className="input-group-text">Owner</span>
                    <input type="text" name="owner" className="form-control" onChange={handleChange} placeholder="Owner"></input>
                </div>
            </form>
            <div className="stl">
                <Button className="on-site" onClick={handleClick}>Add</Button>
                <Button className="back"><Link to="/">Back to main page</Link></Button>
            </div>
        </div>
    )
}

export default Add;