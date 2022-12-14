import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Krat0S0417+",
    database: "targyak",
});

app.get("/telefon", (req, res) => {
    const q = "SELECT * FROM telefonok";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.post("/telefon", (req, res) => {
    const q = "INSERT INTO telefonok(`company`, `type`, `desc`, `owner`) VALUES (?)";

    const values = [
        req.body.company,
        req.body.type,
        req.body.desc,
        req.body.owner,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.delete("/telefon/:id", (req, res) => {
    const telefonId = req.params.id;
    const q = " DELETE FROM telefonok WHERE id = ? ";

    db.query(q, [telefonId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.put("/telefon/:id", (req, res) => {
    const telefonId = req.params.id;
    const q = "UPDATE telefonok SET `company`= ?, `type`= ?, `desc`= ?, `owner`= ? WHERE id = ?";

    const values = [
        req.body.company,
        req.body.type,
        req.body.desc,
        req.body.owner,
    ];

    db.query(q, [...values,telefonId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("Connected to backend.");
});