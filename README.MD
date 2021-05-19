# Installation

1. Install NPM Packages
```
npm install
```

2. Generate keys to sign JWT Token
```

// Create keys folder
mkdir keys && cd keys

// Generate access token
// Do not add passphrase 
ssh-keygen -t rsa -b 1024 -m PEM -f accessToken.key
// Extract public key
openssl rsa -in accessToken.key -pubout -outform PEM -out accessToken.key.pub

// Generate refresh token
// Do not add passphrase 
ssh-keygen -t rsa -b 1024 -m PEM -f refrehToken.key
// Extract public key
openssl rsa -in refrehToken.key -pubout -outform PEM -out refrehToken.key.pub

```