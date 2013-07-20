# Resty

Resty makes a server to send mock JSON objects to requests when building out the front end of your web service.

It's more of a prototyping tool then something to be used in production. 

## Usage

````
var resty = require('resty');

options = {
  port : 8000,
  routes: {
    test: { abc: '123'}
  }
}

resty(options);
````
This will open a server on port 8000, and only respond to a call to `/test` with the `{ abc: '123'}` object.
