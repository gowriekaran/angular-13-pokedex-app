const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/angular-13-pokedex-app'));

app.get('/*', (req,res,next) => {
    res.sendFile(path.join(__dirname + '/dist/angular-13-pokedex-app/index.html'));
});


app.listen(process.env.PORT || 8000);