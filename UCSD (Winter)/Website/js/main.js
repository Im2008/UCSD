//Javascript Code:

function usersYes() {
    let user_prompt = prompt ("What is your name?");
    var results = document.getElementById("mail")
    results.innerHTML = user_prompt
    alert("Confirmed. Thank you!");
}

function usersNo() {
    alert("Confirmed. Thank you!");
}

function bigImage(big) {
    big.style.height = "200px";
    big.style.width = "200px";
}

function regularImage(regular) {
    regular.style.height = "100px";
    regular.style.width = "100px";
}


//jQuery Code:

/* jslint devel: true */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-env es6*/
/* exported showAlert()*/
/* eslint-disable no-console */
/* eslint-env jquery*/
/* jslint browser: true*/
/* global  $*/

$( document ).ready(function() {
    $("h3").hide("slow");
});