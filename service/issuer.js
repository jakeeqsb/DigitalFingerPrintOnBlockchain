const fs = require('fs');
const jwt = require("jsonwebtoken");
const {generateFingerPrint} = require('./fp-generate');
const {addSignature, getSignature} = require('./sda-contract-connector');

 
const generateSigniture = (fingerPrint, institution, privateKey) => {
    return new Promise((resolve, reject) => {

        var object = {
            sda: fingerPrint,
            url: institution, 
            idx: "2016-01"
        };
        jwt.sign(object, privateKey, 
        {algorithm: "RS256"}, (err, token) => {
            if(err){
                reject (err)
            }
            resolve(token);
        })
    });
}

const  issueCert = async (file_path, institution, privateKeyPath) => {
    
    let fingerPrint = await generateFingerPrint(file_path);
    let privateKey = fs.readFileSync(privateKeyPath);

    generateSigniture(fingerPrint, institution, privateKey)
    .then((token) => {
        addSignature(fingerPrint, token);
        
        console.log(`FingerPrint = ${fingerPrint}`);
        console.log(`Token issued = ${token}`);
        
    })
    .catch(err => console.log(err));
    
}

const checkCert = (fingerPrint) => {
    getSignature(fingerPrint).then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = {issueCert, checkCert};