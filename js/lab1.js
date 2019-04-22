// lab1.js

function reverseString(str) {
    return str.split("").reverse().join("");
}

function listSkills(){
    //add bracket to line 8 to close array
    let skills = ['Web Development','Gardening','Drumming','Volunteering'];
    let output = "<h2>Bruce's Skills<h2>";
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
        output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>';
}

function getStarted(){
    //Lines 20 and 22 need semicolons. Line 21 needs =, Add dollar signs to declare last name, city and gpa.
    let firstName = 'Bruce';
    let lastName = 'Elgort';
    let collegeName = 'Clark College';
    let city = 'Vancouver, Washington';
    let gpa = 3.2;
    let output = `${firstName} ${lastName} is currently attending ${collegeName}, located in ${city} and has a grade point average of ${gpa}`;
    // incorrect apostrophe line 28.
    document.getElementById('place1').innerHTML = '<p>' + output + '</p>';
    //remove redundent lines 30 & 31.
    //document.getElementById('place2').innerHTML = '<p>' + output + '</p>';
    //document.getElementById('place2').innerHTML = '<p>' + reverseString(output) + '</p>';
}

window.onload = function(){
    getStarted();
    listSkills();
}