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
    generateRefreshToken(payload, options) {
        try {
            const token = jwt.sign(payload, this.privateRefreshKey, options);
            return token;
        } catch (error) {
            throw err;
        }
    }
    
    //* VERIFY REFRESH TOKEN
    verifyRefreshToken() {
        try {
            const verified = jwt.verify(token, this.publicRefreshKey, options);
            return verified;
        } catch (err) {
            throw err;
        }
    }

    //* GENERATE ACCESS/REFRESH TOKEN RETURN AS AN OBJECT
    generateTokenPair(accessTokenPayload, accessTokenOptions, refreshTokenPayload, refreshTokenOptions) {
        try {
            const accessToken = this.generateAccessToken(accessTokenPayload, this.privateAccesKey, accessTokenOptions);
            const refreshToken = this.generateRefreshToken(refreshTokenPayload, this.privateRefreshKey, refreshTokenOptions);

            return { accessToken, refreshToken };
            
        } catch (err) {
            throw err;
        }
    }
}

module.exports = JWT;