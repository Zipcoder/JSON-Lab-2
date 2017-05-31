var request = new XMLHttpRequest();
var output;
var data_json;

//request.open('GET', 'http://jsonplaceholder.typicode.com/posts/');
request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');

request.onreadystatechange = function()
{

	if((request.status==200) && (request.readyState==4))
  {
		data_json = JSON.parse(request.response);

		for (var i in data_json)
    {
			var data = data_json[i];
      for (var j = 0; j < data.length; j++)
      {
        if (data[j][10] === "Golden Gate Bridge")
        {
    			var title = "<h3>" + data[j]["8"] + "</h3>";
    			var releaseYear = "<p>Year of Release: " + data[j]["9"] + "</p>";
          var productionCompany = "<p>Production Company: " + data[j]["13"] + "</p>";

          output += title + "<br />" + releaseYear + "<br />" + productionCompany + "<br />"
        }
		  }
    }

		document.getElementById("result").innerHTML = output

	}
}

request.send();
