const { URL }  = require('url')

const myURL = new URL('https://google.com');
console.log('searchParams:',myURL.searchParams);