const {issueCert,checkCert} = require("./service/issuer");
const {verifySignature} = require("./service/verifier");
const yargs = require('yargs');
const _ = require("lodash");

const fileOption = {
    describe: "the file path of the certificate",
    demand: true,
    alias: 'f'
}

const pKeyOption = {
    describe: "the file path of the key file",
    demand:true,
    alias: 'p'
}

const fpOption = {
    demand:true,
    describe: "the fingerprint hash data",
    alias:'fp'
}

const institutionOption = {
    demand: true,
    describe: "The institution url"
}

const argv = yargs
.command('issue', 'issue the certificate', {
    file: fileOption,
    inst: institutionOption,
    pem: pKeyOption
})
.command('verify', "verify the certificate", {
    file: fileOption,
    pem: pKeyOption
})
.command('check', 'check the token', {
    fp:fpOption
})
.help()
.argv; 


const command = argv._[0];
const main = async () => {

    if(command === 'issue'){
        issueCert(argv.file, argv.inst, argv.pem);
    }else if(command === 'verify'){
        verifySignature(argv.file, argv.pem);
    }else if(command === 'check'){
        checkCert(argv.fg);
    }
}

main();
