const express = require('express');
const app = express();

const users = {
    name: 'John Doe',
    age: 20
};

app.get("/", (req, res) => {
    console.log("Root route accessed");
    res.send("Hey there");
});

app.post("/checkUserData", (res, req) => {
    let {data} = req.body
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
