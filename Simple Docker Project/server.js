const express = require("express");
const app = express();


app.get( "/", (req, res) => {
    res.json(
        [
            {
                id:1,
                name:"Chetan Kesare",
                age:40
            },
            {
                id:2,
                name:"Raj Dubal",
                age:45
            },
            {
                id:3,
                name:"Praful Lugade",
                age:55
            },
            {
                id:4,
                name:"Kanhaiyya Patil",
                age:100
            }
        ]
    )});

    app.listen(3000,()=>{
        console.log("App Is Working")
    })