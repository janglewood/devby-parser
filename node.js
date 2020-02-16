var request = require('request');
var cheerio = require('cheerio');
var tress = require('tress');
var fs = require('fs');
const axios = require('axios');
var URL = 'https://companies.dev.by';

request(URL, function(error, response, body) {
  if (error) {
    return console.error('There was an error!');
  }

  var $ = cheerio.load(body);
  $(
    '.page>#page-branding-container>.page__content>.page__main-content>.dev-center>.dev-left>.widget-companies-list>form>#tablesort>tbody>tr'
  ).each(async (i, elem) => {
    const link = `${URL}${$('td>a', elem).attr('href')}`;
    // try {
    //   grecaptcha
    //     .execute('6LearF8UAAAAANCBU__yBpFUMde8sw-rZbAZTprP', {
    //       action: 'pageview'
    //     })
    //     .then(function(e) {
    //       $.post('/recaptcha', {
    //         token: e,
    //         imprints: keys
    //       }).done(function(i) {
    //         console.save(i);
    //       });
    //     });
    // } catch (e) {
    //   console.log('ERROR | ', e);
    // }
  });

  // fs.readFile('./keys.txt', 'utf8', (e, data) => {
  //   const arr = eval(data);
  //   console.log(arr[arr.length - 1]);
});
