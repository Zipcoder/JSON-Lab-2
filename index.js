var request = new XMLHttpRequest();
var output;
var data_json;


request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');

request.onreadystatechange = function(){

	if((request.status==200) && (request.readyState==4)){
		data_json = JSON.parse(request.response);
    
		for(var i in data_json){
			var data = data_json[i];
      for (var i = 0; i < data.length; i++){
        if (data_json.data[i][10] === "Golden Gate Bridge"){
          var movie = data_json.data[i][8];
          var year = data_json.data[i][9];
          var company = data_json.data[i][12];
          output = "<p>" + movie + " was made in " + year + " produced by " + company +".</p>" + "<br>";
          document.getElementById('result').innerHTML += output;
        }
      }

		}


	}
}

request.send();
