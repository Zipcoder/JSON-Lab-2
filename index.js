var request = new XMLHttpRequest();
var output;
var data_json;

request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');
//request.open('GET', 'https://raw.githubusercontent.com/mheadd/de-plow-history/master/data/196740.json');

request.onreadystatechange = function(){

	if((request.status==200) && (request.readyState==4)){
		data_json = JSON.parse(request.response);
		for(let i = 0; i < data_json.data.length; i++){
			if(data_json.data[i][10] == "Golden Gate Bridge") {
				output = "<h3>" + data_json.data[i][8] + "<i> (" + data_json.data[i][9] + ")</i></h3><br>"
				output += "<p>" + data_json.data[i][12] + "</p>" + "<br>"
				document.getElementById("result").innerHTML += output
			}
		}
	}
}

request.send();