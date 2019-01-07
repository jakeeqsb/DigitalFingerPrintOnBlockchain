# DigitalFingerprint On Blockchain

### This is an example of application of the digital fingerprint of an image file of certificate (degree) to blockchain. Bascially, the application would make a hash of the provided image file (the certificate), which is the digital fingerprint. Then, the issuer would signed with private key (RSA) to make a digital token (JWT). The whole token is saved to the blockchain paired with the digital fingerprint => fingerprint: token.


### The verifying process is: the verifier has and provide a digital certificate file to check the authenticity and the public key (RSA) of the issuer as the input of the program. Then the program would hash the image file and will try to get the token data paried with the hash on the blockchain. Once it get the token back, it will lock off the token with the RSA public key. If the locked off token has the same hash (digital fingerprint), the verification is success. 

### !!! The files in the credential folder is not the actual credential. This is just an example provided for the demo.

## How to run the demo:
### a. don't forget run ganache local first: ganache-cli 
### b. deploy the smart contract:           truffle migrate --reset (reset is optional).
### c. copy the address and paste it to the address var in /service/sda-contract-connector.js 
### d. Now ready to run the app: 
#### to issue: node app.js issue --file --inst --pem
##### file: file path, inst: institution url, pem: RSA private key 
#### to verify: node app.js verify --file --pem 
##### file: file path, --pem: RSA public key