
const md5File = require("md5-file");

const generateFingerPrint = (file_path) => {
    return new Promise((resolve, reject) => {
        try{
            let hash = md5File.sync(file_path);
            resolve(hash);
        }catch( err ) {
            reject(err);
        };
    });
};

module.exports = {generateFingerPrint}