// Store each time area as a variable
var nineAmEl = $(".nine-am")
var tenAmEl = $(".ten-am")
var elevenAmEl = $(".eleven-am")
var noonEl = $(".noon")
var onePmEl = $(".one-pm")
var twoPmEl = $(".two-pm")
var threePmEl = $(".three-pm")
var fourPmEl = $(".four-pm")
var fivePmEl = $(".five-pm")


// Store each hour of the working day in an array
var workingDay = [
    moment().hours(9).format("HH:00"),
    moment().hours(10).format("HH:00"),
    moment().hours(11).format("HH:00"),
    moment().hours(12).format("HH:00"),
    moment().hours(13).format("HH:00"),
    moment().hours(14).format("HH:00"),
    moment().hours(15).format("HH:00"),
    moment().hours(16).format("HH:00"),
    moment().hours(17).format("HH:00"),
]




// Add the time to the label of each timeblock
$(nineAmEl).children(".input-group-text").text(workingDay[0])
$(tenAmEl).children(".input-group-text").text(workingDay[1])
$(elevenAmEl).children(".input-group-text").text(workingDay[2])
$(noonEl).children(".input-group-text").text(workingDay[3])
$(onePmEl).children(".input-group-text").text(workingDay[4])
$(twoPmEl).children(".input-group-text").text(workingDay[5])
$(threePmEl).children(".input-group-text").text(workingDay[6])
$(fourPmEl).children(".input-group-text").text(workingDay[7])
$(fivePmEl).children(".input-group-text").text(workingDay[8])

// Display the current day at the top of the calender when a user opens the planner.
var dayEl = $("#currentDay");
var date = moment().format("dddd, MMMM Do");
$(dayEl).text(date);

// Display the current time at the top of the calender when a user opens the planner.
var timeEl = $("#currentTime");
var time = moment().format("HH:mm");
$(timeEl).text(time);


// Store the time and update in real time
var currentHour = moment().format("HH");
console.log(currentHour);

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

for(var i=0; i<workingDay.length; i++){  
        
    var hourInt = parseInt(workingDay[i])
    var currentInt = parseInt(currentHour)

    if(hourInt === currentInt) {
        // console.log(workingDay[i] + " is the current time");
        $("span:contains('" + workingDay[i]+ "')").parent().children(".form-control").addClass("present")
    }
    else if (hourInt < currentInt) {
        // console.log(workingDay[i] + " is in the past");
        $("span:contains('" + workingDay[i]+ "')").parent().children(".form-control").addClass("past")
    }
    else if (hourInt > currentInt) {
        // console.log(workingDay[i] + " is in the future");
        $("span:contains('" + workingDay[i]+ "')").parent().children(".form-control").addClass("future")
    }
}


// Save the event in local storage when the save button is clicked in that timeblock.
 var buttonElNine = $(".saveBtn[data-hour=9]")
 var buttonElTen = $(".saveBtn[data-hour=10]")
 var buttonElEleven = $(".saveBtn[data-hour=11]")
 var buttonElNoon = $(".saveBtn[data-hour=12]")
 var buttonElOne = $(".saveBtn[data-hour=1]")
 var buttonElTwo = $(".saveBtn[data-hour=2]")
 var buttonElThree = $(".saveBtn[data-hour=3]")
 var buttonElFour = $(".saveBtn[data-hour=4]")
 var buttonElFive = $(".saveBtn[data-hour=5]")

 buttonElNine.on("click", function(event){
    event.preventDefault();
    var userEventNine = $("textarea[data-hour = 9]").val();
    localStorage.setItem("eventNine",userEventNine);
 })

 buttonElTen.on("click", function(event){
    event.preventDefault();
    var userEventTen = $("textarea[data-hour = 10]").val();
    localStorage.setItem("eventTen",userEventTen);
 })

 buttonElEleven.on("click", function(event){
    event.preventDefault();
    var userEventEleven = $("textarea[data-hour = 11]").val();
    localStorage.setItem("eventEleven",userEventEleven);
 })

 buttonElNoon.on("click", function(event){
    event.preventDefault();
    var userEventNoon = $("textarea[data-hour = 12]").val();
    localStorage.setItem("eventNoon",userEventNoon);
 })

 buttonElOne.on("click", function(event){
    event.preventDefault();
    var userEventOne = $("textarea[data-hour = 1]").val();
    localStorage.setItem("eventOne",userEventOne);
 })

 buttonElTwo.on("click", function(event){
    event.preventDefault();
    var userEventTwo = $("textarea[data-hour = 2]").val();
    localStorage.setItem("eventTwo",userEventTwo);
 })

 buttonElThree.on("click", function(event){
    // event.preventDefault();
    var userEventThree = $("textarea[data-hour = 3]").val();
    localStorage.setItem("eventThree",userEventThree);
 })

 buttonElFour.on("click", function(event){
    // event.preventDefault();
    var userEventFour = $("textarea[data-hour = 4]").val();
    localStorage.setItem("eventFour",userEventFour);
 })
 buttonElFive.on("click", function(event){
    // event.preventDefault();
    var userEventFive = $("textarea[data-hour = 5]").val();
    localStorage.setItem("eventFive",userEventFive);
 })


$("textarea[data-hour = 9]").val(localStorage.getItem("eventNine"))
$("textarea[data-hour = 10]").val(localStorage.getItem("eventTen"))
$("textarea[data-hour = 11]").val(localStorage.getItem("eventEleven"))
$("textarea[data-hour = 12]").val(localStorage.getItem("eventNoon"))
$("textarea[data-hour = 1]").val(localStorage.getItem("eventOne"))
$("textarea[data-hour = 2]").val(localStorage.getItem("eventTwo"))
$("textarea[data-hour = 3]").val(localStorage.getItem("eventThree"))
$("textarea[data-hour = 4]").val(localStorage.getItem("eventFour"))
$("textarea[data-hour = 5]").val(localStorage.getItem("eventFive"))
