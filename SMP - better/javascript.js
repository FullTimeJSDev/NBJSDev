var database = [
    {
        username: "Nicholas",
        password: "12345"
    },

    {
        username: "Scott",
        password: "888"
    },
    {
        username: "Claire",
        password: "0909"
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

function validCredentials(user, pass) {

    for (var i=0; i < database.length; i++) 
    {
        if (database[i].username === user 
            && database[i].password === pass) 
           // {
             //   document.write(newsFeed[0].timeline, + " " + newsFeed[1].timeline);
            //}
            {
            return true;
            }
    }
    return false;
}

function userCredentials(user, pass) {

    if (validCredentials(user, pass)) {
    document.write("Welcome " + user + " here's your latest news feed " + "<br>" + " <br> " + newsFeed[0].username +  ": "  + newsFeed[0].timeline + 
    " <br> " + " <br> " + newsFeed[1].username + ": " + newsFeed[1].timeline);
    } else {
      alert("Wrong username or password, try again");
    }     
}
userCredentials(userNamePrompt, passwordPrompt);