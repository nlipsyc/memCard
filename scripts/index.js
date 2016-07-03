console.log("JS loaded");
console.log("document", document);


var papa = require("papaparse"),
    JSZip = require("jszip"),
    zip = new JSZip(),

    memJson = [],
    cards = [];

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
        
        // for(var i = 1; i < memJson.data.length; i++){
        for(var i = 1; i < 100; i++){
            drawCard(memJson.data[i]);
        }
        console.log('CARDS', cards);

        console.log('support blob?', JSZip.support.blob);
        zipIt(memJson);
    }
    });
};

function drawCard(data){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);  //Clear canvas
        ctx.font = "32px serif";
        ctx.fillText(data.join(), 50, 75);

        var b64 = canvas.toDataURL('image/png'),
            blob = dataURItoBlob(b64);

            cards.push(blob);

        
        console.log('cards');

        function dataURItoBlob(dataURI) {
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(dataURI.split(',')[1]);
            else
                byteString = unescape(dataURI.split(',')[1]);

            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {type:mimeString});
        }
    }

function zipIt(memJson){
    //for(i = 0; i < cards.length; i++){
    for(i = 0; i < 100; i++){
        zip.file('membershipCard'+ memJson.data[i+1][0] + memJson.data[i+1][1] + '.png', cards[i]);
    }
    console.log(zip);
    // zip.generateAsync({type:"blob"}).then(function (blob) {
    //         saveAs(blob, "memCards.zip");
    //     }, function(err){
    //     });

    zip.generateAsync({type:"base64"}).then(function (base64) {
            window.location = "data:application/zip;base64," + base64;
    }, function (err) {
      // shouldn't happen with a base64...
    });
}