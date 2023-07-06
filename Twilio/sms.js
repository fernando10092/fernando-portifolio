// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token in Account Info and set the environment variables.
// See http://twil.io/secure
const accountSid = "ACc7c99b7eef38ed53228e6db8f6f3993b";
const authToken = "48dfecc58a7944100a0315cff6759651";
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({ body: 'Oi Fernando', from: '+15095161994', to: '+5511995370943' })
    .then(message => console.log(message.sid));

