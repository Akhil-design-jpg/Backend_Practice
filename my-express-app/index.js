import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
app.use(express.json())

const PORT = process.env.PORT

const users = [{
    name: "Akhil", age: 22
},{
    name: "Verma", age: 22
},{
    name: "JohnDoe", age: 30
}]

app.get("/",(req,res)=>{
    res.send(`Hello express`)
})

app.post("/users",(req,res)=>{
    const {name, age} = req.body
    if(!name || !age){
        res.status(400).json({error: "Name or age cannot be null"})
    }

    res.status(200).json({message: "Name and age registered", user: {name,age}})
})

app.get("/users/:id",(req,res)=>{
    const userId = req.params.id
    if( userId<0 || userId>users.length){
        res.send(`UserId not found`)
    }
    const user = users[userId]
    res.status(200).json({user})
})

app.get("/users",(req,res)=>{
    res.status(200).json({users})
})


app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`); 
})