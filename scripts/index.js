console.log('JS loaded');
papa = require("papaparse");


window.grabCsv = function (){
    csv={};

    console.log('grabCsv tirggered');
    var file = document.getElementById('uploadButton').files[0];
    if(file){
        console.log('name', file.name, 'file', file);
    }
// Convert to JSON
    papa.parse(file, {
        complete: function(memJson){
            console.log('memJson', memJson);
        }
    });
};

