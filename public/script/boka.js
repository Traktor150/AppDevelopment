'use strict';

const url = '/data';
const req = new XMLHttpRequest;
req.open('GET', url);
req.responseType = 'json';
req.send();

req.onload = () => {
    const data = req.response;
    console.log(data);
}