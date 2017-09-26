// var google = require('googleapis');
// var plus = google.plus('v1');
//
// var API_KEY = 'AIzaSyCatau1jfyeWLdnWyu6gIJlhb7tb-OVsKU'; // specify your API key here
//
// plus.people.get({
//   auth: API_KEY,
//   userId: 'polacho@gmail.com'
// }, function (err, user) {
//   console.log('Result: ' + (err ? err.message : user.displayName));
// });

// var fs = require('fs');
// var drive = google.drive({ version: 'v3', auth: oauth2Client });
//
// drive.files.create({
//   resource: {
//     name: 'testimage.png',
//     mimeType: 'image/png'
//   },
//   media: {
//     mimeType: 'image/png',
//     body: fs.createReadStream('awesome.png') // read streams are awesome!
//   }
// }, callback);


// Imports the Google Cloud client library
var vision = require('@google-cloud/vision');
var math = require('math');

// Instantiates a client
var visionClient = vision({
  projectId: 'tesis-node-v1',
  keyFilename: './tesis-node-v1-887516168d8c.json'
});

// The name of the image file to annotate
var fileName = './img/vendaval.jpg';

// Prepare the request object
var request = {
  source: {
    filename: fileName
  }
};


// Performs label detection on the image file
// vision.labelDetection(request)
//   .then((results) => {
//     var labels = results[0].labelAnnotations;
//
//     console.log('Labels:');
//     labels.forEach((label) => {
//       if ((label.score * 10) > 8) {
//         console.log(label.description + ' with a ' + label.score + ' certainty');
//       }
//     });
//   })
//
//
//   .catch((err) => {
//     console.error('ERROR:', err);
//   });


//////////////////////////////////////////


  // Performs label detection on the image file
  visionClient.labelDetection(request, function(err, results){
    if (err) {
      console.error('ERROR:', err);
    }
    else {
      //console.log(results);
      var labels = results.labelAnnotations;

      console.log('Labels:');

      labels.forEach(function(label){
        if ((label.score * 10) > 8) {
          console.log(label.description + ' with a ' + math.round(label.score * 100) + ' percent certainty');
        }
      });
    }
  });
