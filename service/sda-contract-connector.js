const Web3 = require('web3');
const fs = require('fs');
const ContractAbi = require("../ethereum/build/contracts/SignedDigitalAsset.json"); 
const address = "0x3cc0c7376873fb2eeada275816e0cfb6b3998740";

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];
process.setMaxListeners(1);
var sdaContract =  web3.eth.contract(ContractAbi.abi);
var sdaInstance = sdaContract.at(address);

const addSignature = (digitalFingerPrint, signature) => {    
    sdaInstance.addSignature(digitalFingerPrint, signature, {gas:798445});
}

const getSignature = (digitalFingerPrint) => {
    return new Promise((resolve) => {
        let result = sdaInstance.getSignature(digitalFingerPrint, {gas:798445});
        //console.log(result);
        resolve(result);
    });
    
}

module.exports = {addSignature, getSignature};