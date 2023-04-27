const express = require('express')
const router = express.Router()
const { google } = require('googleapis');
const open = require('open');


const credentials = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: process.env.GOOGLE_CALLBACK_URL
};


const oauth2Client = new google.auth.OAuth2(
    credentials.client_id,
    credentials.client_secret,
    credentials.redirect_uri
);

const scopes = ['https://www.googleapis.com/auth/userinfo.profile']; // Add additional scopes as needed
const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
});


router.get('/', (req,res) => {
    open(authUrl);
})

router.get('/oauth2callback', async (req, res) => {
    const { code } = req.query;
  
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
  
    // Use the tokens to make authorized API requests
    // ...
  
    res.send('Authentication successful!');
  });
  

console.log('Authorize this app by visiting the following URL:');
console.log(authUrl);

module.exports =  router;