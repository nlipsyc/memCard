console.log("JS loaded");
console.log("document", document);


var papa = require("papaparse"),
    JSZip = require("jszip"),
    zip = new JSZip(),
    
    PDFDocument = require('pdfkit'),
    pdf = new PDFDocument,
    
    blobStream = require('blob-stream'),
    
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
        
        //for(var i = 1; i < memJson.data.length; i++){
         for(var i = 1; i < 2; i++){
            pdfCard(memJson.data[i]);
        }
        console.log('CARDS', cards);
        console.log('36');
        //zipIt(memJson, 50);
         //       console.log('2');
        //zipIt(memJson, 150);
        //        console.log('3');
        //zipIt(memJson, 200);

    }
    });
};

function pdfCard(data){
// create a document and pipe to a blob
var doc = new PDFDocument();
var stream = doc.pipe(blobStream());

// // draw some text
// doc.fontSize(25)
//    .text('Here is some vector graphics...', 100, 80);
   
// // some vector graphics
// doc.save()
//    .moveTo(100, 150)
//    .lineTo(100, 250)
//    .lineTo(200, 250)
//    .fill("#FF3300");
   
// doc.circle(280, 200, 50)
//    .fill("#6600FF");
   
// // an SVG path
// doc.scale(0.6)
//    .translate(470, 130)
//    .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
//    .fill('red', 'even-odd')
//    .restore();
   
// // and some justified text wrapped into columns
// doc.text('And here is some wrapped text...', 100, 300)
//    .font('Times-Roman', 13)
//    .moveDown()
//    .text('lorem ipsum dolor sit amet');
   
// // end and display the document in the iframe to the right
// doc.end();
// stream.on('finish', function() {
//   xyz = stream.toBlobURL('application/pdf');
//   window.location = xyz;
// });


    stream = pdf.pipe(blobStream());
    pdf.fontSize(32)
    .text([data[0], data[1]].join(' '));

    pdf.addPage()
        .text('2');
    
    pdf.addPage()
        .text('3');

    pdf.addPage()
        .text('4');

      pdf.addPage()
        .text('2');
    
    pdf.addPage()
        .text('3');

    pdf.addPage()
        .text('4');

    pdf.addPage()
        .text('2');
    
    pdf.addPage()
        .text('3');

    pdf.addPage()
        .text('4');

    pdf.addPage()
        .text('2');
    
    pdf.addPage()
        .text('3');

    pdf.addPage()
        .text('4');

      pdf.addPage()
        .text('2');
    
    pdf.addPage()
        .text('3');

    pdf.addPage()
        .text('4');

          pdf.addPage()
        .text('2');
    
    pdf.addPage()
        .text('3');

    pdf.addPage()
        .text('4');

          pdf.addPage()
        .text('2');
    
    pdf.addPage()
        .text('3');

    pdf.addPage()
        .text('4');

          pdf.addPage()
        .text('2');
    
    pdf.addPage()
        .text('3');

    pdf.addPage()
        .text('4');

          pdf.addPage()
        .text('2');
    
    pdf.addPage()
        .text('3');

    pdf.addPage()
        .text('4');

          pdf.addPage()
        .text('2');
    
    pdf.addPage()
        .text('3');

    pdf.addPage()
        .text('4');

          pdf.addPage()
        .text('2');
    
    pdf.addPage()
        .text('3');

    pdf.addPage()
        .text('4');

          pdf.addPage()
        .text('2');
    
    pdf.addPage()
        .text('3');

    pdf.addPage()
        .text('4');

          pdf.addPage()
        .text('2');
    
    pdf.addPage()
        .text('3');

    pdf.addPage()
        .text('4');

          pdf.addPage()
        .text('2');
    
    pdf.addPage()
        .text('3');

    pdf.addPage()
        .text('4');

    pdf.end();
    stream.on('finish', function() {
        var blob, url;
        blob = stream.toBlob('');

        console.log('1');
        url = stream.toBlobURL('application/pdf');
        console.log('2');
        cards.push(blob);
        console.log('3');
        console.log('blob, url', blob, url);
             window.location = url;
     });
}

function drawCard(data){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
        
        //ctx.clearRect(0, 0, canvas.width, canvas.height);  //Clear canvas
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#000000";
        ctx.font = "32px serif";
        ctx.fillText('BL ' + [data[0], data[1]].join(' '), 5, 32);
        ctx.fillText([data[2], data[3]].join(' '), 5, 68);

        ctx.fillText('BR ' + [data[0], data[1]].join(' '), 405, 32);
        ctx.fillText([data[2], data[3]].join(' '), 405, 68);
        
        ctx.fillText('TL ' + [data[0], data[1]].join(' '), 5, 632);
        ctx.fillText([data[2], data[3]].join(' '), 5, 668);

        ctx.fillText('TR ' + [data[0], data[1]].join(' '), 405, 632);
        ctx.fillText([data[2], data[3]].join(' '), 405, 668);


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

function zipIt(memJson, quant){
    //for(i = 0; i < cards.length; i++){
    for(i = 0; i < quant; i++){
        zip.file(i + 'membershipCard'+ memJson.data[i+1][0] + memJson.data[i+1][1] + '.png', cards[i]);
    }
    console.log(zip);
    // zip.generateAsync({type:"blob"}).then(function (blob) {
    //         saveAs(blob, "memCards.zip");
    //     }, function(err){
    //             console.log(err);
    //     });

    zip.generateAsync({type:"base64"}).then(function (base64) {
            window.location = "data:application/zip;base64," + base64;
    }, function (err) {

        console.log('err', err);
      // shouldn't happen with a base64...
    });
}