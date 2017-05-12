// ==UserScript==
// @name         Vote Bot
// @version      0.1
// @author       Phillip Shih
// @match        https://www.insidernj.com/insidernj-poll-won-njtv-democratic-gubernatorial-primary-debate/
// @grant        none
// @require      http://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

function goToPage() {
    window.location.href = "https://www.insidernj.com/insidernj-poll-won-njtv-democratic-gubernatorial-primary-debate/";
}

function clickVote() {
    window.scrollTo(0,1100);
    $(".totalpoll-choice-checkbox:first").click();
    $(".totalpoll-button,.totalpoll-button-primary,.totalpoll-button-vote").click();
    window.setTimeout(goToPage, 2000);
}


(function() {
    'use strict';
    window.onload = clickVote();
})();