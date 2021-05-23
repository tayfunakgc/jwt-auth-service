const fs = require('fs');
const path = require('path');
const jsonwt = require('jsonwebtoken');

class Jwt {

    constructor(options) {
        this.configure(options);
    }

    configure(options) {
        //* Sign mode 'key' or 'secret'
        this._signMode = options['sign_mode'] || 'secret'

        //* Path of private and public keys 
        this._privateAccesKeyPath = options['private_access_key_path'];
        this._publicAccessKeyPath = options['public_access_key_path'];
        this._privateRefreshKeyPath = options['private_refresh_key_path'];
        this._publicRefreshKeyPath = options['public_refresh_key_path'];

        //* Secrets of access and refresh tokens
        this._accessTokenSecret = options['access_token_secret'] || 'superaccesstokensecret';
        this._refreshTokenSecret = options['refresh_token_secret'] || 'superrefreshtokensecret';
    }

    //* GENERATE ACCESS TOKEN
    generateAccessToken(payload, options) {
        try {
            const token = jsonwt.sign(payload, this._privateAccesKey, options);
            return token;
        } catch (err) {
            throw err;
        }
    }

    //* VERIFY ACCESS TOKEN
    verifyAccessToken(token, options) {
        try {
            const verified = jsonwt.verify(token, this._publicAccessKey, options);
            return verified;
        } catch (err) {
            throw err;
        }
    }

    //* GENERATE REFRESH TOKEN
    generateRefreshToken(payload, options) {
        try {
            const token = jsonwt.sign(payload, this._privateRefreshKey, options);
            return token;
        } catch (error) {
            throw err;
        }
    }
    
    //* VERIFY REFRESH TOKEN
    verifyRefreshToken(token) {
        try {
            const verified = jsonwt.verify(token, this._publicRefreshKey, options);
            return verified;
        } catch (err) {
            throw err;
        }
    }

    //* GENERATE ACCESS/REFRESH TOKEN RETURN AS AN OBJECT
    generateTokenPair(accessTokenPayload, accessTokenOptions, refreshTokenPayload, refreshTokenOptions) {
        try {
            const accessToken = this.generateAccessToken(accessTokenPayload, this._privateAccesKey, accessTokenOptions);
            const refreshToken = this.generateRefreshToken(refreshTokenPayload, this._privateRefreshKey, refreshTokenOptions);

            return { accessToken, refreshToken };

        } catch (err) {
            throw err;
        }
    }

    //* GETTERS

    //* SIGN MODE
    get signMode() {
        return this._signMode;
    }

    set signMode(signMode) {
        this._signMode = signMode;
    }

    //* PRIVATE ACCESS KEY PATH
    get privateAccesKeyPath() {
        return this._privateAccesKeyPath;
    }

    set privateAccesKeyPath(privateAccesKeyPath) {
        this._privateAccesKeyPath = privateAccesKeyPath;
    }

    //* PUBLIC KEY ACCESS PATH
    get publicAccessKeyPath() {
        return this._publicAccessKeyPath;
    }

    set publicAccessKeyPath(publicAccessKeyPath) {
        this._publicAccessKeyPath = publicAccessKeyPath;
    }

    //* PRIVATE REFRESH KEY PATH
    get privateRefreshKeyPath() {
        return this._privateRefreshKeyPath;
    }

    set privateRefreshKeyPath(privateRefreshKeyPath) {
        this._privateRefreshKeyPath = privateRefreshKeyPath;
    }

    //* PUBLIC REFRESH KEY PATH
    get publicRefreshKeyPath() {
        return this._publicRefreshKeyPath;
    }

    set publicRefreshKeyPath(publicRefreshKeyPath) {
        this._publicRefreshKeyPath = publicRefreshKeyPath;
    }

    //* ACCESS TOKEN SECRET
    get accessTokenSecret() {
        return this._accessTokenSecret;
    }

    set accessTokenSecret(accessTokenSecret) {
        this._accessTokenSecret = accessTokenSecret;
    }

    //* REFRESH TOKEN SECRET
    get refreshTokenSecret() {
        return this._refreshTokenSecret;
    }

    set refreshTokenSecret(refreshTokenSecret) {
        this._refreshTokenSecret = refreshTokenSecret;
    }
}

module.exports = new Jwt({});