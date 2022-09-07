const CryptoJS = require("crypto-js");
const fs = require('fs');
const key = "secure-key";

const data = fs.readFileSync('test.json', {encoding: 'utf-8', flag: 'r'});

console.log(`lets encrypt ${data}`);

const enc = CryptoJS.AES.encrypt(data, key).toString();
fs.writeFileSync('encrypted', enc, {encoding: 'binary'});


const f_enc = fs.readFileSync('encrypted', {encoding: 'binary'});

const dec = CryptoJS.AES.decrypt(f_enc, key).toString(CryptoJS.enc.Latin1);

console.log(`decryption result ${dec}`);

fs.writeFileSync('decrypted.json', dec, {encoding: 'utf-8'});
