var request = new XMLHttpRequest();
var data_json;
var output = "";

request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');



request.onreadystatechange = function(){
    
    
    if((request.status==200) && (request.readyState == 4)){
        
        data_json = JSON.parse(request.response);

		for(var i = 0; i < data_json.data.length; i++){
            
            if(data_json.data[i][10] == "Golden Gate Bridge"){
                output += "<h3>" + data_json.data[i][8] + "</h3>" + "Released: " +data_json.data[i][9] + " Production Company: " +data_json.data[i][12];
            }

		}

		document.getElementById("result").innerHTML += output + "<br>";

    }
}

request.send();