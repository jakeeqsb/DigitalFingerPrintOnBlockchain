var SignedDigitalAsset = artifacts.require('./SignedDigitalAsset.sol');


//0xecd5f9cc9949a7887ad0efdc88f41a02645f05f8
module.exports = function (deployer){
    deployer.deploy(SignedDigitalAsset, "my.vuw.ac.nz/sda-file-association", {gas:798445})
    .then( (SignedDigitalAsset) => {
        console.log("DEPLOYED ADDERSS:" , SignedDigitalAsset.address);
    });
}

