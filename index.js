var request = new XMLHttpRequest();
var output;
var data_json;

request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');



request.onreadystatechange = function(){
    
    
    if((request.status==200) && (request.readyState == 4)){
        
        data_json = JSON.parse(request.response);
        console.log(data_json);

		for(var i = 0; i < data_json.data.length; i++){
			//var data = data_json.data[i];
            
            if(data_json.data[i][10] == "Golden Gate Bridge"){
                output = "<h3>" + data_json.data[i][8] + "</h3>" + data_json.data[i][9] + data_json.data[i][12];
            }

			

		}

		document.getElementById("result").innerHTML += output + "<br>";

    }
}

request.send();