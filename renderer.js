console.log("rendere");

window.addEventListener('checkKey', checkKey);



function checkKey(e) {
    var event = window.event ? window.event : e;
    console.log(event.keyCode)
    
}

