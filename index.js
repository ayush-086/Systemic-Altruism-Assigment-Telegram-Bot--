const express = require('express');
const PORT = process.env.PORT || 5004;
const {handler} = require('./controller');


const app = express();
app.use(express.json());
app.post('*', async(req,res)=>{
    console.log(req.body);
    res.send(await handler(req));
});
app.get('*', async(req,res)=>{
    res.send(await handler(req));
});

app.listen(PORT, function(err){
    if(err) console.log(err);
    console.log(`Server is running on port ${PORT}`);
});


