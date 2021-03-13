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
        $("#hour-12").addClass("past");
    } else if (currentHour >= 12 && currentHour < 13){
        $("#hour-12").addClass("present");
    } else if (currentHour < 12) {
        $("#hour-12").addClass("future");
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
    } else if (currentHour < 14) {
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

$(document).ready(function(){
    timeBlockColor();

    // listening for the save button to be clicked
    $(".saveBtn").on("click", function() {
        // getting values of the .description
        var hourlyPlan = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // saving values into local storage
        localStorage.setItem(time, hourlyPlan);
    })

    // gets values from local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-6 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    // updates the function every second
    setInterval(timeBlockColor, 1000);
});