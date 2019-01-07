const fs = require('fs');
const jwt = require("jsonwebtoken");
const {generateFingerPrint} = require('./fp-generate');
const {getSignature} = require('./sda-contract-connector');


const verifySignature = (file_path, publicKeyPath) => {
    let publicKey = fs.readFileSync(publicKeyPath);
    generateFingerPrint(file_path)
    .then((fingerPrint) => {
        getSignature(fingerPrint)
        .then((token) => {
            jwt.verify(token, publicKey, (err, decoded)=> {
                if(err){
                    console.log(err);
                }else{
                    console.log(`The certification verified!`);
                    console.log(decoded);
                }
            })
        })
    })
    .catch((err) => {
        console.log(err);
    })
};

module.exports = {verifySignature};