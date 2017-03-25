const snekfetch = require('snekfetch');
const key = require('../../config.json').google.shortenKey;

module.exports = (longUrl) => snekfetch.post(`https://www.googleapis.com/urlshortener/v1/url?key=${key}`)
  .set({ 'Content-Type': 'application/json' })
  .send({ longUrl })
  .then(res => res.body.id);
