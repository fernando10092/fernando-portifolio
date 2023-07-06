var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'TEST-4362785988177847-112119-48ae4d01c2ae887a374b9366baf72820-14502688'
});

var preference = {
  items: [
    {
      title: 'Test',
      quantity: 1,
      currency_id: 'ARS',
      unit_price: 10.5
    }
  ]
};

mercadopago.preferences.create(preference)