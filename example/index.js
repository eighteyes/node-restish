var resty = require('resty');

options = {
  port : 8000,
  routes: {
    test: { abc: '123'},
    array: [ 1, 2, 3]
  }
}

resty(options);