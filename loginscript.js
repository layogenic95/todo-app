var loginForm = document.getElementById("loginform")
var button = document.getElementsByClassName('button-51')[0];

var database = [
    { 
        username: "maja",
        password: "maja"
    },
    {
        username: "martin",
        password: "martin"
    }
]

function isUserValid(id, pas) {  
    for (var i=0; i < database.length; i++) {
        if(database[i].username === id &&
        database[i].password === pas) {
            return true;}
        } 
        return false;
}

button.addEventListener("click", function() {
    var user = document.getElementsByClassName('user')[0].value;
    var pass = document.getElementsByClassName('pass')[0].value;
    if (isUserValid (user, pass)) {
        location.href = "./todo.html";
    } else {
        alert("Sorry, wrong username or password.")
    }
})