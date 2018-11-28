var request= new XMLHttpRequest();
var output;
var data_json;

request.open('GET', "https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD");


request.onreadystatechange=function(){
    if((request.status==200)&& (request.readyState==4)){
        data_json=JSON.parse(request.response);
        let count=1;                
        for(var i in data_json){
            for(let movieNum=0;movieNum<data_json[i].length;movieNum++){
                if(data_json.data[movieNum][10]==="Golden Gate Bridge"){
                    
                    document.getElementById("result").innerHTML+= "<b>"+count+". </b>"  + data_json.data[movieNum][8]+"<br>"+
                    "<b>Release Year: </b>" +data_json.data[movieNum][9]+"<br>"+"<b>Production Company: </b>"+ data_json.data[movieNum][12]+"<br><br>";
                count++;
            }
            }

            
        
        
    
        }
    }
}
request.send();