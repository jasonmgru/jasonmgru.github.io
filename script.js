/// <reference path="https://code.jquery.com/jquery-3.2.1.slim.min.js"/>

//important roles. These stay at the top.
var important_roles = ["web developer", "iOS developer", "programmer"]

//roles that I take in my life. I'll keep adding more.
var roles = ["boyfriend", "brother", "trombone player", 
         "baller", "coffee drinker", "barista", "life enjoyer", "minnesotan", 
         "american", "breakfast lover", "gamer", "vikings fan", 
         "walker", "son", "student", "teacher",
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
shuffle(important_roles);
shuffle(roles);

//puts the list of roles on the front page of my site
var i = 0;
let upperList = $("#upperList");
let name = $("#name");

//puts three of them on the top 
while(i < 3){

    //selects the list above the giant Jason Gruenhagen on my homepage.
    let upperList = $("#upperList");

    //creates a div item with the role in it
    let role = $('<div class="role text-center">'+ important_roles[i] +'</div>');

    //adds the role to the list
    upperList.append(role);

    i++;
}

//puts the rest of the items on the bottom
var j = 0;
while(j < roles.length){

    //selects the list below the giant Jason Gruenhagen 
    let lowerList = $("#lowerList");

    //creates div with the role in it
    let role = $('<div class="role text-center">'+ roles[j] +'</div>');

    //adds the role to the list
    lowerList.append(role);

    j++;
}