// ==UserScript==
// @name         KissCartoon/KissAnime Ad Remover
// @description  Hide ads on kissanime and kisscartoon
// @author       OvertAnglerfish
// @include      http://kisscartoon.me/Cartoon/*
// @include      *://kissanime.*/Anime/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @grant        none
// ==/UserScript==
function clickHide() {$(':contains("Hide")').click();}
window.onload = clickHide;
window.setTimeout(clickHide, 10000);
