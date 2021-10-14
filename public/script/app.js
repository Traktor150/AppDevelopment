'use strict';
console.log('Iam alive')


onload() = () => {
    const form = document.createElement('form');
    form.id = 'formen';
    
    const h1 = document.createElement('h1');
    h1.textContent = "Login";
    document.getElementById('formen').appendChild(h1);



    const txt1 = document.createElement('textbox');
    txt1.inputMode;
    document.getElementById('formen').appendChild(txt1);

    const txt2 = document.createElement('textbox');
    txt2.inputMode;
    document.getElementById('formen').appendChild(txt2);


    document.getElementById('login').appendChild('formen');


    
}