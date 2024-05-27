
// ASSIGNMENT 5 PREVIEWING APIS

// setTimeout() function

console.clear();

function delayedMessage1() {
    console.log(`This is our first message, and is delayed by 5 seconds`);
}
function delayedMessage2() {
    console.log(`This is our second message, and is delayed by 2 second`);
}

setTimeout(delayedMessage1, 5000);
setTimeout(delayedMessage2, 2000);


console.log(`This is our third message, there No delay here`);


// repeatedly call function and then expire 


let intervalID;

function repeatCallFunction() {
    console.log(`This message will be repeatedly called every 2 seconds.`);
}


intervalID = setInterval(repeatCallFunction, 2000);


setTimeout(function() {
    clearInterval(intervalID);
    console.log("Interval stopped after 10 seconds.");
}, 10000);



// find location
console.log(window.location);

// find history object and navigate session history
console.log(window.history);


window.history.back();
window.history.forward();

// store data strings using localStorage
function storeDataInLocalStorage() {
    localStorage.setItem("name", "Abby");
    localStorage.setItem("age", "33");
    console.log("Data stored in localStorage.");
}

// and check if data is stored 
function checkDataInLocalStorage() {
    console.log("Name:", localStorage.getItem("name"));
    console.log("Age:", localStorage.getItem("age"));
}


// storeDataInLocalStorage()
// checkDataInLocalStorage()
