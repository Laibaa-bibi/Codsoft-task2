
const mongoose = require('mongoose');
const express = require("express");
const app = express();

const cors = require('cors');

require('./config');
const users = require('./users');
const jobs = require('./jobs');

app.use(express.json());
app.use(cors());

app.post('/Signup', async (req, resp) => {

    let data = new users(req.body);
    const result = await data.save();
    resp.send(result);
})


app.post('/login', async (req, res) => {

    if (req.body.password && req.body.email) {
        let value = await users.findOne(req.body);

        if (value) {
            res.send(value);
        }
        else {
            res.send("No user found");
        }

    }

    else {
        res.send("No user found");
    }
});


app.post('/postjob', async (req, resp) => {
    let data = new jobs(req.body);
    const result = await data.save();
    resp.send(result);
})


app.get('/view' , async(req,resp)=>{
   let data = await jobs.find();

   if(data.length>0)
   {
    resp.send(data);
   }
   else{
    resp.send("no results found");
   }

})

//for search
app.get('/search/:key' , async(req,resp)=>{
    let result = await jobs.find({
        "$or" : [
            { field : {$regex: req.params.key} }
        ]
})

    resp.send(result);
});

app.listen(3000);
