const $ = require('jquery');

let sayHello = () => {
    console.log('Hello');
};

sayHello();

$(document).ready(function(){
    console.log("Ready!");
});