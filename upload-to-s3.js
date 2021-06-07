var AWS = require('aws-sdk');
// Set the Region 
AWS.config.update({region: 'eu-west-1'});

// Create S3 service object
const s3 = new AWS.S3({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY
  });

// call S3 to retrieve upload file to specified bucket
var uploadParams = {Bucket: process.argv[2], Key: 'aes_keys/test/randomKey.enc', Body: ''};
var file = process.argv[3];

// Configure the file stream and obtain the upload parameters
var fs = require('fs');
var fileStream = fs.createReadStream(file);
fileStream.on('error', function(err) {
  console.log('File Error', err);
});
uploadParams.Body = fileStream;
//var path = require('path');
//uploadParams.Key = path.basename('aes_keys/test/' + file);

// call S3 to retrieve upload file to specified bucket
s3.upload (uploadParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } if (data) {
    console.log("Upload Success", data.Location);
  }
});


//node s3_upload.js entranet-1 randomKey.enc.gz