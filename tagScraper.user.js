// ==UserScript==
// @name Tumblr tag scraper
// @namespace https://github.com/baroquenroll
// @description Export the post HTML of a Tumblr tag page
// @include https://www.tumblr.com/tagged/*
// @include https://tumblr.com/tagged/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
// @grant none
// ==/UserScript==

(function() {
    'use strict';
    var exportTextArea = "<textarea rows='10' cols='86' class='exportForm'>";
    $("li.post_container > div.post > div.post_wrapper").not('.new_post_buttons_container').each(function(idx) {
        exportTextArea += "\n\n" + $(this).html() + "\n\n";
    });
    $("#posts").before(exportTextArea);
})();