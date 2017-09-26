// ==UserScript==
// @name         Sponsored Post Killer
// @namespace    http://lepermessiah.net
// @version      0.4
// @description  Hide posts on your dashboard by blogs you don't follow
// @match        https://*.tumblr.com/dashboard*
// @grant        none
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function($) {
    $("div.post.not_mine").each(function() {
        var postdata = $(this).data("json");
        if(typeof postdata != 'undefined' && postdata.hasOwnProperty('tumblelog-data')) {
            if(!postdata['tumblelog-data'].following) {
                $(this).hide();
                console.log("Sponsored Post Killer: hiding post from " + postdata['tumblelog-data'].name);
            }
        }
    });
})(window.jQuery);