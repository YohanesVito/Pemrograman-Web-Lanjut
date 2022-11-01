const express = require('express','10.0.1.9');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/',(req,res)=>{
    res.send('Lah ngatur');
})

app.get('/home',(req,res)=>{
    var nama = req.query
    res.send('Iki Home')
})

app.get('/login',(req,res)=>{
    res.send('Login lur')
})

app.listen(port, ()=>{
    console.log("Server menyala");
});



