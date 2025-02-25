const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");


const app = express();

app.use(express.json())


const swaggerDocs = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const users = [
    { name: "lokesh", age: 21 },
    { name: "Mukesh", age: 23 }
]


app.get("/", (req, res) => {

    const { name } = req.query;
    if (!name) {
        return res.json({
            users
        })
    }

    const user = users.filter((res) => {
        return res.name.toLowerCase() == name.toLowerCase()
    })
    res.send({
        user: user
    })
})

app.get("/user", (req, res) => {

    const { name } = req.query;
    if (!name) {
        return res.json({
            users
        })
    }

    const user = users.filter((res) => {
        return res.name.toLowerCase() == name.toLowerCase()
    })
    res.send({
        user: user
    })
})

app.delete("/users/:name", (req, res) => {

    console.log(req.params)
    const { name } = req.params;


    const user = users.filter((res) => {
        return res.name.toLowerCase() !== name.toLowerCase()
    })
    res.send({
        user: user
    })
})
app.put("/users/:name", (req, res) => {

    const { name } = req.params;



    const findUser = users.find((res) => res.name.toLocaleLowerCase() == name.toLocaleLowerCase());



    res.send({
        user: findUser.name = "Loki"
    })
});


app.post("/user", (req, res) => {
    const user = req.body;

    if (!user.name || !user.age) {
        return res.status(400).json({ message: "Name and age are required" });
    }

    users.push(user);

    res.status(201).json({
        message: "User added successfully",
        user
    });
});


app.listen(3000, () => {
    console.log("server")
})