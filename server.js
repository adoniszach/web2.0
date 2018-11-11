const express = require('express');
const app = express();

app.get('/',(req,res) =>{
  res.send('Hello WEB 2.0');
})
app.listen(3000,()=>{
  console.log('server is runnin on port 3000');
});
