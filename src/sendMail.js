var apiKey = 'key-xxx'
var domain = 'xxx.mailgun.org'
var mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain})

var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'henry.seres@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
}

export const sendMail = () => {
  mailgun.messages().send(data, function (error, body) {
    if (error) return console.error('error')
    console.log(body)
  })
}
