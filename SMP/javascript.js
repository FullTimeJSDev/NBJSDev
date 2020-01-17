var database = [
    {
        username: "Nicholas",
        password: "12345"
    }
];

var newsFeed = [
    {
        username: "Rob",
        timeline: "Bored :(",
    },
    {
        username: "Evan",
        timeline: "Me Tarzan"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What is your password?");

function userCredentials(user, pass) {
    if (user === database[0].username
    && pass === database[0].password) {
        alert("Welcome " + user + " Here's your latest news feed " + " " + newsFeed[0].username +  ": "  + newsFeed[0].timeline + 
        " " + newsFeed[1].username + ": " + newsFeed[1].timeline)
    } else {
        alert("Wrong username or password");
    }
}

userCredentials(userNamePrompt, passwordPrompt);