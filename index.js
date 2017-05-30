var request = new XMLHttpRequest();
var output;
var data_json;

//request.open('GET', 'http://jsonplaceholder.typicode.com/posts/');
request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');

request.onreadystatechange = function(){

	if((request.status==200) && (request.readyState==4)){
		data_json = JSON.parse(request.response);

		for(var i in data_json){
			var data = data_json[i];

			console.log(data_json);
			output = "<h3>" + data["view", "attribution"] + "</h3>";
			output += "<p>" + data["view", "name"] + "</p>";
      output += "<p>" + data["i"].production_company + "</p>";
		}

		document.getElementById("result").innerHTML"<br />" += output

	}
}

request.send();
