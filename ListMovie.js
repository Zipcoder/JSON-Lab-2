
var request = new XMLHttpRequest();
var output;

//opens up an asynchronous request; HTTP GET method to send the data over to our live web server
request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD')

//onreadystatechange, looks for a property in the request object called readyStat
request.onreadystatechange = function(){
	if((request.status==200) && (request.readyState==4)){
		var data_json = JSON.parse(request.response);
    for(var i = 0; i < data_json.data.length; i++){
      if(data_json.data[i][10] === "Golden Gate Bridge"){
          let title = data_json.data[i][8];
          let year = data_json.data[i][9];
          let production = data_json.data[i][12];
          output = "<h3>" + title + " - " + year + "</h3>"
          output += "<p><i>"+ production + "</i></p><br>";
          document.getElementById('result').innerHTML += output;
      }
    }
  }
}

request.send();
