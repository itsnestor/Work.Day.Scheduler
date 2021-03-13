// showing the current date in the header
var theDate = moment();
$("#currentDay").text(theDate.format("dddd, MMMM Do"));

// variable for the current hour
var currentHour = moment().hour();
// determining the color of the time blocks from past / present / future
function timeBlockColor() {
    if (currentHour > 9) {
        $("#hour-9").addClass("past");
    } else if (currentHour >= 9 && currentHour < 10){
        $("#hour-9").addClass("present");
    } else if (currentHour < 8) {
        $("#hour-9").addClass("future");
    }

    if (currentHour > 10) {
        $("#hour-10").addClass("past");
    } else if (currentHour >= 10 && currentHour < 11){
        $("#hour-10").addClass("present");
    } else if (currentHour < 10) {
        $("#hour-10").addClass("future");
    }

    if (currentHour > 11) {
        $("#hour-11").addClass("past");
    } else if (currentHour >= 11 && currentHour < 12){
        $("#hour-11").addClass("present");
    } else if (currentHour < 11) {
        $("#hour-11").addClass("future");
    }

    if (currentHour > 12) {
        $("#hour-13").addClass("past");
    } else if (currentHour >= 12 && currentHour < 13){
        $("#hour-13").addClass("present");
    } else if (currentHour < 12) {
        $("#hour-13").addClass("future");
    }

    if (currentHour > 13) {
        $("#hour-13").addClass("past");
    } else if (currentHour >= 13 && currentHour < 14){
        $("#hour-13").addClass("present");
    } else if (currentHour < 13) {
        $("#hour-13").addClass("future");
    }

    if (currentHour > 14) {
        $("#hour-14").addClass("past");
    } else if (currentHour >= 14 && currentHour < 15){
        $("#hour-14").addClass("present");
    } else if (currentHour < 14 {
        $("#hour-14").addClass("future");
    }

    if (currentHour > 15) {
        $("#hour-15").addClass("past");
    } else if (currentHour >= 15 && currentHour < 16){
        $("#hour-15").addClass("present");
    } else if (currentHour < 15) {
        $("#hour-15").addClass("future");
    }

    if (currentHour > 16) {
        $("#hour-16").addClass("past");
    } else if (currentHour >= 16 && currentHour < 17){
        $("#hour-16").addClass("present");
    } else if (currentHour < 16) {
        $("#hour-16").addClass("future");
    }

    if (currentHour > 17) {
        $("#hour-17").addClass("past");
    } else if (currentHour >= 17 && currentHour < 18){
        $("#hour-17").addClass("present");
    } else if (currentHour < 17) {
        $("#hour-17").addClass("future");
    }
}
