// ==UserScript==
// @name         Kvakk CSS
// @namespace    https://github.com/datagutten/kvakk-css
// @version      1.0
// @description  Et userscript for å ersatte CSS på kvakk.no
// @author       datagutten
// @include      http://www.kvakk.no/forum/*
// @grant        none
// ==/UserScript==

var link = document.getElementsByTagName("link");

for (var i=0, max=link.length; i < max; i++) {
	if(link[i].href.indexOf('style.css')>0)
		link[i].href="http://dedicated.datagutten.net/kvakk-css/style.css";
	if(link[i].href.indexOf('custom.css')>0)
		link[i].href="http://dedicated.datagutten.net/kvakk-css/custom.css";
}
