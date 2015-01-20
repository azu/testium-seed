# testium-seed

Example project for testium(minimum setup).

![screenshot-error](http://monosnap.com/image/FA1NZW9vzQilkGMOLOBSrkp9ZdA56H.png)

## Installation

```
npm install
```

## Usage

```
npm test
```

Default: use phantomjs for E2E testing.

## Document

1: Install `devDependencies`

This project use [testium](https://github.com/groupon-testium/testium "testium"), [Mocha](http://mochajs.org/ "Mocha") and [power-assert](https://github.com/twada/power-assert "power-assert").

2: Create [.testiumrc](.testiumrc)

```
; defaults to false, `npm start`s the app
launch = true
```

3: Setup HTTP server for testing.

[nodeapps/http-server](https://github.com/nodeapps/http-server "nodeapps/http-server") provide HTTP server.

```
  "scripts": {
    "start": "http-server",
    "test": "mocha test/*.js"
  },
```

If you not going to use `XHR` etc..., is not required for you.

4: Write E2E test case

Please see [test/app-test.js](test/app-test.js)

snippet

```
"use strict";
var injectBrowser = require('testium/mocha');
var assert = require('power-assert');

describe("index.html", function () {
    before(injectBrowser());// <= integrate testium 
    beforeEach(function () {
        this.browser.navigateTo('/');// move to `"/"` which is served by http-server
    });
    it("then output filled with text of this option", function () {
        var firstInput = this.browser.getElement('input[name="framework_name"]');
        // click
        firstInput.click();
        // assert 
        var testFrameWorkName = firstInput.get("value");
        var output = this.browser.getElement("#js-output");
        var result = output.get("text");
        assert(result.indexOf(testFrameWorkName) >= 0);
    });
});


5: Run test

```
npm test
# alias to
mocha --require intelli-espower-loader test/
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT