const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

const users = {
    name: 'John Doe',
    age: 20
};

app.post("/getLessonsData", (req, res) => {
    console.log(req)
});

app.post("/checkUserData", (res, req) => {
    let {data} = req.body
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
