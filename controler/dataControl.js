'use strict';

exports.sendData = (req, res) => {
    
    const fs = require('fs');

    const text = '';


    fs.readFile('../public/data/data.json', (err, data) => {
        if (err) throw err;
        console.log(data);
        text = JSON.stringify(data);
        });



    res.send(text);
}
exports.showData = (req, res) => {
    
    res.sendfile('public/html/boka.html');
}