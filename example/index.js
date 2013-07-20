var restish = require('restish');

// also supports silent: true for no logs
options = {
  port : 8000,
  routes: {
    test: { abc: '123'},
    array: [ 1, 2, 3]
  }
}

restish(options);