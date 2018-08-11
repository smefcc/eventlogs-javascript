/*
MIT License

Copyright (c) 2018 smef.pw (smef.cc)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
 
var i=0

function checkConsole(){
    if (i === 10) {
	document.getElementById('smefpw2').innerHTML = "<font face=\"verdana\"><font color=\"#009EBD\">[smef]</font> console reset<br></font>";
	i=1;
	}
}


// disable rightclick
document.addEventListener("contextmenu", function(disablemouse) {
 disablemouse.preventDefault();
document.getElementById('smefpw2').innerHTML += "<font face=\"verdana\"><font color=\"#009EBD\">[smef]</font> context menu is disabled</font><br>";
i += 1;
checkConsole();
}, false);
// disable rightclick

// urls functions
function twitter() {
	document.getElementById('smefpw2').innerHTML += "<font face=\"verdana\"><font color=\"#009EBD\">[smef]</font> twitter link was clicked by user</font><br>";
	i += 1;
	checkConsole();
}

function discord() {
	document.getElementById('smefpw2').innerHTML += "<font face=\"verdana\"><font color=\"#009EBD\">[smef]</font> discord link was clicked by user</font><br>";
	i += 1;
checkConsole();
}

function selly() {
	document.getElementById('smefpw2').innerHTML += "<font face=\"verdana\"><font color=\"#009EBD\">[smef]</font> selly link was clicked by user</font><br>";
	i += 1;
checkConsole();
}

function youtube() {
	document.getElementById('smefpw2').innerHTML += "<font face=\"verdana\"><font color=\"#009EBD\">[smef]</font> youtube link was clicked by user</font><br>";
	i += 1;
checkConsole();
}
// urls functions

// site checker
function checkURL() {
var currentLocation = window.location.href;
	if (currentLocation == "https://smef.pw/") {
		document.getElementById('smefpw').innerHTML += "<br><font face=\"verdana\"><font color=\"#009EBD\">[smef]</font> official site<br></font>";
}	
else {
		document.getElementById('smefpw').innerHTML += "<br><font face=\"verdana\"><font color=\"#009EBD\">[smef]</font> unverified site current site " + window.location.href + " differs from official site smef.pw<br></font>";
	}
}
// site checker
