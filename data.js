var data_json, output, title, year, production;
var request = new XMLHttpRequest();
request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');

request.onreadystatechange = function() {
  if ((request.status === 200) && (request.readyState === 4)) {
    data_json = JSON.parse(request.response);
    var data = data_json.data;

   for (var i = 0; i < data.length; i++) {
     if (data_json.data[i][10] === "Golden Gate Bridge") {
       var title = data_json.data[i][8];
       var year = data_json.data[i][9];
       var production = data_json.data[i][12];
       output = "<p>" + title + " made in " + year + " by " + production + ".</p>" + "<br>";
       document.getElementById('result').innerHTML += output;
     }
   }
  }
}

request.send();
