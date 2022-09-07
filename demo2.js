const CryptoJS = require("crypto-js");
const fs = require('fs');
const key = "secure-key";

// enc with openssl
// openssl enc -aes-256-cbc -pass pass:"secure-key" -p -in test.json -out file.enc -e -base64

const f_enc = fs.readFileSync('file.enc', {encoding: 'latin1', flag: 'r'});

const dec = CryptoJS.AES.decrypt(f_enc, key).toString(CryptoJS.enc.Latin1);

console.log(`decryption result ${dec}`);

fs.writeFileSync('decrypted2.json', dec, {encoding: 'utf-8'});
