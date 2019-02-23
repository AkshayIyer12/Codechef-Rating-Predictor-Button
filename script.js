// ==UserScript==
// @id           codechef-rating-predictor-button
// @name         Codechef rating predictor Button
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  This userscript adds a button on contest page which redirects to Codechef Rating Predictor
// @author       dush1729

// @match        https://www.codechef.com/COOK*
// @match        https://www.codechef.com/LTIME*
// @match        https://www.codechef.com/JAN*
// @match        https://www.codechef.com/FEB*
// @match        https://www.codechef.com/MARCH*
// @match        https://www.codechef.com/APRIL*
// @match        https://www.codechef.com/MAY*
// @match        https://www.codechef.com/JUNE*
// @match        https://www.codechef.com/JULY*
// @match        https://www.codechef.com/AUG*
// @match        https://www.codechef.com/SEPT*
// @match        https://www.codechef.com/OCT*
// @match        https://www.codechef.com/NOV*
// @match        https://www.codechef.com/DEC*
// ==/UserScript==

(function() {
    var contestId = window.location.pathname.replace(/\//g, "")
    var prefix = 'http://codechef-rating-predictor.7e14.starter-us-west-2.openshiftapps.com/contest/'

    window.addEventListener('load', function() {
        
        var menu = document.getElementById("contest-ranks")
        if(menu) {
            console.log('lol')
            var aTag = document.createElement('a');
            aTag.setAttribute('href', prefix + contestId + "/all");
            aTag.setAttribute('class', "button red fnone");
            aTag.setAttribute('id', 'predictor-link');
            aTag.innerHTML = "Rating Predictor";
            menu.appendChild(aTag);
            document.getElementById("predictor-link").style.marginTop = "20px"; 
        }
    })
})();
