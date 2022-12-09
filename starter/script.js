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

// Display the current day at the top of the calender when a user opens the planner.
var dayEl = $("#currentDay")
var date = moment().format("dddd, MMMM Do")
$(dayEl).text(date)

// Store the time and update in real time



// Add the time to the label of each timeblock

var workingDay = [
    moment().hour(9).format("ha"),
    moment().hour(10).format("ha"),
    moment().hour(11).format("ha"),
    moment().hour(12).format("ha"),
    moment().hour(13).format("ha"),
    moment().hour(14).format("ha"),
    moment().hour(15).format("ha"),
    moment().hour(16).format("ha"),
    moment().hour(17).format("ha"),
]



$(nineAmEl).children(".input-group-text").text(workingDay[0])
$(tenAmEl).children(".input-group-text").text(workingDay[1])
$(elevenAmEl).children(".input-group-text").text(workingDay[2])
$(noonEl).children(".input-group-text").text(workingDay[3])
$(onePmEl).children(".input-group-text").text(workingDay[4])
$(twoPmEl).children(".input-group-text").text(workingDay[5])
$(threePmEl).children(".input-group-text").text(workingDay[6])
$(fourPmEl).children(".input-group-text").text(workingDay[7])
$(fivePmEl).children(".input-group-text").text(workingDay[8])

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.



    // If current hour after timeblock hour - backgound-color = grey (Past)


    // If current hour = timeblock hour - backgound-color = red (Present)


    // If current hour before timeblock hour - backgound-color = green (Future)


// Allow a user to enter an event when they click a timeblock


// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page