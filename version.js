function readJsonFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readJsonFile("https://github.com/walidamriou/Moskotcho_Password_Generator_Desktop/blob/master/current_version.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    alert(data[0]);
    //var elem = document.getElementById("datadisplay");
    //elem.innerHTML = data.data['id']; //we want to read: "id": "123664" 
});