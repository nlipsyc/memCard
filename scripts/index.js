console.log("JS loaded");
console.log("document", document);
papa = require("papaparse"),
memJson = [],

window.grabCsv = function (){
    csv={};

    console.log("grabCsv tirggered");
    var file = document.getElementById("uploadButton").files[0];
    if(file){
        console.log("name", file.name, "file", file);
    }
// Convert to JSON
     memJson = papa.parse(file, {
        complete: function(memJson){
            console.log("memJson", memJson);
            drawCard(memJson.data[9]);
        }
    });

     function drawCard(data){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
        
        ctx.font = "48px serif";
        ctx.fillText(data.join(), 50, 75);

    var png = canvas.toDataURL();
    window.location.href=png;
    }
};
