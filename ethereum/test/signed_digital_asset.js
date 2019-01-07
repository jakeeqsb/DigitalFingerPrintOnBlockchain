var SignedDigitalAsset = artifacts.require('./SignedDigitalAsset.sol');


contract('SignedDigitalAsset', function(accounts) {
  it("should assert true", function(done) {
    var signed_digital_asset;
    return SignedDigitalAsset.deployed().then(function (instance){
      signed_digital_asset = instance; 

      signed_digital_asset.addSignature('173013304aeec4e49cc6718cb4caeccb', 'avcdded');
      return signed_digital_asset.getSignature.call('173013304aeec4e49cc6718cb4caeccb');
    }).then(function (result){
      console.log(result);
    }); 
   
  });
});
