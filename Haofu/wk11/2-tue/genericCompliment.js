const express = require('express');
const homeController = require('./homeController')

const app = express();

const PORT = 8080;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/:name', homeController)

app.listen(PORT, ()=>{
  console.log(`Listening on port: ${PORT}`);
})
