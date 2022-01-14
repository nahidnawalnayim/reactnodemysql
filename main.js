let express = require('express');
let mysql = require('mysql');
let cors=require('cors');
let app = express();
app.use(cors());
let any=mysql.createConnection({
    host: 'localhost',
    user    : 'root',
    password: '',
    database: 'nahiddb'
})
any.connect(
    function(err){
       
        console.log('connected');
    },
   
);
app.use(express.json())
app.post('/register',(req,res)=>{
    const uname = req.body.name;
    const password = req.body.password;

    any.query("INSERT INTO nahidtable(  name,password) VALUES(?,?)",[uname,password],function(err,result){
       
        console.log("database created");
        }
    )
})
app.listen(3007,()=>{
    console.log('server started');
})