# In-Order Sinon-Chai Assertions

## Motivation
[Sinon-Chai](https://github.com/domenic/sinon-chai) provides Chai assertions for [Sinon.JS](http://sinonjs.org/).
Unfortunately, it does not deal with making sure a spy was called multiple time in a specific order. This can result in awkward, non-fluent assertions:

```javascript
var spy = sinon.spy();
[1, 2, 3].forEach(spy);
expect(spy.getCall(0).args[0]).to.equal(1);
expect(spy.getCall(1).args[0]).to.equal(2);
expect(spy.getCall(2).args[0]).to.equal(3);
```

Using `sinon-chai-in-order`, you can say this instead:

```javascript
expect(spy).inOrder.to.have.been.calledWith(1).then.calledWith(2).then.calledWith(3);
```

## Setup
In Node, just install using `npm`:
```
$ npm install chai-react-element
```

This plugin is distributed in [UMD](https://github.com/umdjs/umd) format so you can use it everywhere.

In your tests, have Chai use the plugin. Make sure you also use `sinon-chai`, otherwise the nested assertions will not work.
```javascript
var chai = require("chai");
var sinonChai = require("sinon-chai");
var sinonChaiInOrder = require("sinon-chai-in-order");

chai.use(sinonChai);
chai.use(sinonChaiInOrder);
```

## Contributing

### Setup

This project uses Gulp for build and tests, and webpack-dev-server for running and debugging in-browser. To install the project, just run npm install.

To start the development environment, run npm start, or, if you have Gulp installed globally, gulp dev. This runs tests using Mocha and in addition starts webpack-dev-server on port 8080. To run the tests, use npm test (or gulp test).

### Issues

Please open an issue on the project's GitHub repo for any problem you might find. Please refrain from creating pull requests before discussing your problem in an issue.

### Pull Requests

Please try to develop your submission using Test-Driven Development. At the very least, make sure that your changes are well-covered with tests, and that your code is clean.