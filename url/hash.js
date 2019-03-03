const { URL } = require('url');

const myURL = new URL('https://example.org/foo#bar');

console.log(myURL.hash);
