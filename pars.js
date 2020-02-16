let emails = '';

(function getEmail(key) {
  let email = '';
  grecaptcha
    .execute('6LearF8UAAAAANCBU__yBpFUMde8sw-rZbAZTprP', { action: 'pageview' })
    .then(function(e) {
      $.post('/recaptcha', {
        token: e,
        'imprints[]': key
      }).done(function(i) {
        console.log(i.data[0]);
        emails += `${i.data[0]}, `;
        return JSON.stringify(i.data[0])
      });
    });
})(arguments[0]);

// console.log(emails);
