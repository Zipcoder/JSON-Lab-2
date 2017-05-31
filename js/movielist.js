window.onload = function () {
    var xhttp = new XMLHttpRequest();//creates an XML HTTP request, it is used for calling the URL.
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var movieData = JSON.parse(this.responseText);
            parseAndDisplayMovieData(movieData);
        }
    };
    xhttp.open("GET", "https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD", true);
    xhttp.send();
}

//  used the http://www.jsoneditoronline.org/ to see the json structure

function parseAndDisplayMovieData(movieData) {
    var displayLines = "";
    var i;
    var title = "";
    var releaseYear = "";
    var productionCompany = "";
    var outputText = "";
    var location = ""

    var movieDataArray = movieData.data;
    for (i = 0; i < movieDataArray.length; i++) {
        title = movieDataArray[i][8];
        releaseYear = movieDataArray[i][9];
        productionCompany = movieDataArray[i][12];
        location = movieDataArray[i][10];
        if ((location) && (location.toLowerCase().includes("golden gate bridge"))) {
            outputText += "movie title  " + title + "</br>" + "release year  " + releaseYear + "</br>" + "Production Company " + productionCompany +"</br></br>";

        }
    }
    document.getElementById('result').innerHTML = outputText;

}