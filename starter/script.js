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
    moment().hours(9).format("H"),
    moment().hours(10).format("H"),
    moment().hours(11).format("H"),
    moment().hours(12).format("H"),
    moment().hours(13).format("H"),
    moment().hours(14).format("H"),
    moment().hours(15).format("H"),
    moment().hours(16).format("H"),
    moment().hours(17).format("H"),
]


var nine = $(nineAmEl).children(".input-group-text").text(workingDay[0])
$(tenAmEl).children(".input-group-text").text(workingDay[1])
$(elevenAmEl).children(".input-group-text").text(workingDay[2])
$(noonEl).children(".input-group-text").text(workingDay[3])
$(onePmEl).children(".input-group-text").text(workingDay[4])
$(twoPmEl).children(".input-group-text").text(workingDay[5])
$(threePmEl).children(".input-group-text").text(workingDay[6])
$(fourPmEl).children(".input-group-text").text(workingDay[7])
$(fivePmEl).children(".input-group-text").text(workingDay[8])


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

var currentHour = moment().hours(13).format("H")

    for(var i=0; i<workingDay.length; i++){  
        
        var hourInt = parseInt(workingDay[i])
        var currentInt = parseInt(currentHour)

        // console.log(hourInt);
        // console.log(currentInt)

        
        if(hourInt === currentInt) {
            console.log(workingDay[i] + " is the current time");
            $("span:contains('" + workingDay[i]+ "')").parent().children(".form-control").addClass("present")
        }
        else if (hourInt < currentInt) {
            console.log(workingDay[i] + " is in the past");
            $("span:contains('" + workingDay[i]+ "')").parent().children(".form-control").addClass("past")
        }
        else if (hourInt > currentInt) {
            console.log(workingDay[i] + " is in the future");
            $("span:contains('" + workingDay[i]+ "')").parent().children(".form-control").addClass("future")
        }
        }

   



    // If current hour = timeblock hour - backgound-color = red (Present)


    // If current hour before timeblock hour - backgound-color = green (Future)


// Allow a user to enter an event when they click a timeblock


// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page