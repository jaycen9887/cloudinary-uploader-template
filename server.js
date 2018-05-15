const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//view engine
app.set('view engine', "ejs");

//home route
app.get('/', (req,res) => {
    res.render('index');
});

app.listen(PORT, () => {console.log('App listening on port ' + PORT)});