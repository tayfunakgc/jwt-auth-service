const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

class JWT {

    constructor() {
    }

    //* SET PRIVATE & PUBLIC KEYS/SUPERSECRET FOR ACCESS AND REFRESH TOKENS
    setOptions() {}

    //* GENERATE ACCESS TOKEN
    generateAccessToken(payload, options) {
        try {
            const token = jwt.sign(payload, this.privateAccesKey, options);
            return token;
        } catch (err) {
            throw err;
        }
    }

    //* VERIFY ACCESS TOKEN
    verifyAccessToken(token, options) {
        try {
            const verified = jwt.verify(token, this.publicAccessKey, options);
            return verified;
        } catch (err) {
            throw err;
        }
    }

    //* GENERATE REFRESH TOKEN
    generateRefreshToken() {}
    
    //* VERIFY REFRESH TOKEN
    verifyRefreshToken() {}

}

module.exports = JWT;