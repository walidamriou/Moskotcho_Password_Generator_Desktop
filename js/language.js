
/*
var English = "https://moskotchopg.walidamriou.com/language/en.json";
var Arabic = "https://moskotchopg.walidamriou.com/language/ar.json";

var request_data;

function readJsonFile(file) {
  return new Promise(function (resolve, reject) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        var data = JSON.parse(rawFile.responseText);
        resolve(data);
      }
    };
    rawFile.send(null);
  });
}

function readAndAppend(language) {
  readJsonFile(language).then(function (data) {
    console.log(data);
    request_data = data;
  });
}

readAndAppend(English);
readAndAppend(Arabic);
*/
