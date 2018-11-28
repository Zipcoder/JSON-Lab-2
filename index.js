var request = new XMLHttpRequest();

request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');
request.onreadystatechange = function() {
  if((request.status == 200) && (request.readyState==4)) {
    var sanfranMovieInfo = JSON.parse(request.response);
    for (let movieIndex = 0; movieIndex < sanfranMovieInfo.data.length; movieIndex++) {
      if (sanfranMovieInfo.data[movieIndex][10] === "Golden Gate Bridge") {
        document.getElementById('result').innerHTML += sanfranMovieInfo.data[movieIndex][8] + " ";
        document.getElementById('result').innerHTML += sanfranMovieInfo.data[movieIndex][9] + " ";
        document.getElementById('result').innerHTML += sanfranMovieInfo.data[movieIndex][12] + " ";
        document.getElementById('result').innerHTML += "<br>";
      }
    }
  }
}

request.send();
