# Restish

Restish makes a server to send mock JSON objects to requests when building out the front end of your web service.

It's more of a prototyping tool then something to be used in production.

## Usage

````
var restish = require('restish');

options = {
  port : 8000,
  routes: {
    test: { abc: '123'}
  }
}

restish(options);
````
This will open a server on port 8000, and only respond to a call to `/test` with the `{ abc: '123'}` object.
