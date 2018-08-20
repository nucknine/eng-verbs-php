$(document).ready(function(){
function getVerb(verb) {
	var req = getXMLHttpRequest();
	var queryString = "infinitive="+verb;

	req.onreadystatechange = function() {
		if(req.readyState != 4) return;

		var result = document.getElementById('result');
		result.innerHTML = req.responseText;

	}
	req.open('POST','../inc/result-table.php', true);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send(queryString);
}

function showVerbs(e){
	var txt = document.getElementById('txtVerb');
	getVerb(txt.value);
}

var sub = document.getElementById("sub");
sub.addEventListener("click", showVerbs);
});

