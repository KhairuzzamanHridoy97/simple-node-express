const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/',(req,res)=>{
    res.send('Hello From My Second Node server. First Day at Node & express. I am very excited. I am unstopable today');
});

const users =[
    {id:0,name:"hridoy",language:"JS",contact:01123,email: 'bab@mail'},
    {id:1,name:"mk",language:"JS",contact:0113,email: 'dab@mail'},
    {id:2,name:"kh",language:"JS",contact:01177,email: 'sab@mail'},
    {id:3,name:"robot",language:"JS",contact:01136,email:'jak@mail' },
    {id:4,name:"comrade",language:"JS",contact:01127,email:'lab@mail' },
    {id:5,name:"varkhon",language:"JS",contact:02127,email: 'nab@mail'},
]

app.get('/users',(req,res)=>{
    const search=req.query.search;
    //use query parameter
    if(search){
        const searchResult= users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }else{

    }
    res.send(users)
})


// app.METHOD
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log('hitting the post',req.body);
    // res.send('inside')
    res.json(newUser)
})

//dynamic api
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fol',(req,res)=>{
    res.send(['am','jam','kathal','lichu'])
})

app.get('/fol/dokan/am',(req,res)=>{
    res.send('Foler Dokane Shagotom')
})

app.listen(port,()=>{
    console.log('listening to port', port);
})