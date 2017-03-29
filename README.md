# ivalice

## Testing code w/ react, redux & immutable.js

### Scripts

* Run dev server on localhost:3000:

    `npm start`


* Run tests:

    `npm test`


* Run tests and watch:

    `npm run test:watch`


* Run tests and generate code coverage:

    `npm run test:cov`


* Run eslint:

    `npm run lint`


* Generate eslint report (saved to eslint-report.html):

    `npm run lint:report`


### Testing

* Uses Jest with snapshot testing.
* Uses Jest coverage.
* Uses named and default export for a class, so that unit tests can run for a component w/o needing to wrap it in a store.