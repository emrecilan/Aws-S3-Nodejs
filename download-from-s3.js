'use strict'
const AWS = require('aws-sdk')
const fs = require('fs')

/*
const ACCESS_KEY_ID = "ENTER ACCESS KEY ID HERE"
const SECRET_ACCESS_KEY = "ENTER SECRET ACCESS KEY HERE"
const BUCKET_NAME = "ENTER BUCKET NAME HERE"
*/

var s3 = new AWS.S3({
    accessKeyId: ACCESS_KEY_ID ,
    secretAccessKey: SECRET_ACCESS_KEY,
})

const fileName = 'randomKey.enc';
const downloadFile = () => {
    fs.readFile(fileName, (err, data) => {
       if (err) throw err;
       const params = {
           Bucket: 'entranet-1', // pass your bucket name
           Key: "aes_keys/test/" + fileName, // file will be saved as testBucket/contacts.csv
       };
       s3.getObject(params, function(err, data) {
        if (err) {
            console.log(err)
        }
        fs.writeFileSync('./randomKey2.enc', data.Body)
        console.log('file downloaded successfully')
        });
    });
  };
  
  downloadFile();
  