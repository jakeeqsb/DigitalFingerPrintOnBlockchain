pragma solidity ^0.4.22;

contract SignedDigitalAsset {
    // The owner of the contract
    address owner = msg.sender;
    // Institution name
    string public institution;
    // Storage for linking the signatures to the digital finterprints
    mapping (bytes32 => string) fingerPrintSignatureMapping;

    // Event
    event SignatureAdded(string digitalFingerPrint, string signature, uint256 timestamp);
    modifier isOwner() {
        require( msg.sender == _master);
        _;
    }
    address private _master;

    constructor(string _institution) {
        institution = _institution;
        _master = msg.sender;
    }

    function addSignature(string digitalFingerPrint, string signature) external isOwner{
        
        // Add signature to the mapping
        fingerPrintSignatureMapping[keccak256(abi.encodePacked(digitalFingerPrint))] = signature;
        // Broadcast the token added event
        SignatureAdded(digitalFingerPrint, signature, now);
        
    }

    // Removes a signature from this contract
    function removeSignature(string digitalFingerPrint) external isOwner{
        fingerPrintSignatureMapping[keccak256(abi.encodePacked(digitalFingerPrint))]= "";
    }

    // Returns the corrsponding signature for a specified digial fingerprint
    function getSignature(string digitalFingerPrint) external constant returns (string){
        return fingerPrintSignatureMapping[keccak256(digitalFingerPrint)];
    }

    // Removes the entire contract from the blockchain and invalidates all signatures
    function removeContract() external isOwner{ 
        selfdestruct(owner);
    }
}
