const express = require('express')
const router = express.Router()
const { OAuth2Client } = require('google-auth-library');

// define the home page route
router.get('/loginwithgoogle', async (req, res) => {
  const { code } = req.query;
  const data = await getGoogleIdToken(code);
  const result = verifyIdToken(data);
  console.log('data', data);
})

const getClient = () => {
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  const REDIRECT_URI = process.env.GOOGLE_CALLBACK_URL;
  const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
  return oauth2Client;
};

const getGoogleIdToken = async (code) => {
  const oauth2Client = getClient();
  const { tokens } = await oauth2Client.getToken(code);
  const idToken = tokens.id_token;
  return idToken;
};

async function verifyIdToken(idToken) {
  const client = getClient()

  try {
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    return payload; // Return the payload if needed
  } catch (error) {
    console.error('Error verifying ID token:', error.message);
    throw error;
  }
}


module.exports = router