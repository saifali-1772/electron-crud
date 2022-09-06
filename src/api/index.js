const express = require('express')
const app = express()

const Datastore = require('nedb');
let db = new Datastore({ filename: './src/api/demo.db', autoload: true });

// const db = {}
// db.user = new Datastore({ filename: './src/api/user.db', autoload: true })
// db.class = new Datastore({ filename: './src/api/class.db', autoload: true })

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/',(req,res)=>{
    db.insert(req.body, (err,doc)=>{
        res.send(doc);
    })
    // res.json({id:12,name:"amit",location:"pune"})
    // console.log('Hello')
})

app.get('/getAll',(req,res)=>{
    try {
        db.find({},(err,doc)=>{
            res.send(doc);
        })
    } catch (error) {
        console.log(error)
    }
})

app.listen(4000,()=>{console.log('Server start on port 4000')})