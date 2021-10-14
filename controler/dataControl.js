'use strict';

exports.sendData = (req, res) => {
    
    res.sendfile('../public/data/data.json')
}
exports.showData = (req, res) => {
    
    res.sendfile('public/html/boka.html')
}