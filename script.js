/// <reference path="https://code.jquery.com/jquery-3.2.1.slim.min.js"/>

//roles that I take in my life. I'll keep adding more.
var roles = ["web developer", "boyfriend", "brother", "trombone player", 
         "baller", "coffee drinker", "barista", "life enjoyer", "minnesotan", 
         "american", "breakfast lover", "gamer", "vikings fan", 
         "walker", "son", "iOS developer", "programmer", "student", "teacher",
         "wingman"];

//Found this online. Thanks StackOverflow!
function shuffle(a) {
/*  This shuffle function was found on StackOverflow. 
    This is an implementation of the Fisher-Yates Shuffle algorithm. */

    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

//shuffles the list of roles that I take
shuffle(roles);

//puts the list of roles on the front page of my site
var i = 0;
let upperList = $("#upperList");
let name = $("#name");
while(i < 3){

    //selects the list above the giant Jason Gruenhagen on my homepage.
    let upperList = $("#upperList");

    //creates a list item with a role in it
    let role = $("<p>"+ roles[i] +"</p>");

    //adds li to the list
    //upperList.append(role);

    //this will happen two more times
    i++;
}