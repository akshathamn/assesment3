// var day= new Date();
// var hr=day.getHours();
// if(hr>0 && hr<12){
// 	document.write("good morning");
// }
// else if(hr>=12 && hr<16){
// 	document.write("good afertnoon");
// }
// else if(hr>16 && hr<20)
// {
// 	document.write("good evening");
// }
// else{
// 	document.write("good night");
// }

var d = new Date();
// document.getElementById("demo").innerHTML = d;
var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + ',</b> User';

        var date = new Date();
// get the date as a string
var n = date.toDateString();
// get the time as a string
var time = date.toLocaleTimeString();

// find the html element with the id of time
// set the innerHTML of that element to the date a space the time
document.getElementById('time').innerHTML = n + ' ' + time;