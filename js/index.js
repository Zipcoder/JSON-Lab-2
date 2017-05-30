var request = new XMLHttpRequest();
var output = "";
var data_json;

request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');

request.onreadystatechange = function () {

    if ((request.status == 200) && (request.readyState == 4)) {
        data_json = JSON.parse(request.response);

        for (var i in data_json) {
            for (var j = 0; j < data_json[i].length; j++) {
                if (data_json[i][j]["10"] == "Golden Gate Bridge") {

                    var title = data_json[i][j]["8"];
                    var releaseYear = data_json[i][j]["9"];
                    var productionCompany = data_json[i][j]["13"];

                    output += "<h3>" + title + "</h3><br><p>Year of Release: " + releaseYear + "</p><br><p>Production Company: " + productionCompany + "</p><hr>";
                }
            }
        }
        document.getElementById("result").innerHTML = output
    }
}

request.send();
