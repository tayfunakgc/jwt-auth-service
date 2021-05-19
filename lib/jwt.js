const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

class JWT {

    constructor() {}

    //* SET PRIVATE & PUBLIC KEYS/SUPERSECRET FOR ACCESS AND REFRESH TOKENS
    setOptions() {}

    //* GENERATE ACCESS TOKEN
    generateAccessToken() {}

    //* VERIFY ACCESS TOKEN
    verifyAccessToken() {}

    //* GENERATE REFRESH TOKEN
    generateRefreshToken() {}
    
    //* VERIFY REFRESH TOKEN
    verifyRefreshToken() {}

}

module.exports = JWT;