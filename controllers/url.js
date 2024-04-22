const {nanoid} = require('nanoid');
const URL = require('../models/url');

async function handleGenerateShortUrl(req, res) {
 
    const shortID = nanoid(6);
    const redirectURL = req.body.redirectURL;
    const newURL = new URL({
        shortId: shortID,
        redirectURL: redirectURL
    });
}