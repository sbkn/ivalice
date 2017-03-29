# ivalice

## Testing code w/ react, redux & immutable.js now with Bluekit for displaying components separately

### Scripts

    npm start

    npm test

    npm run test:watch

    npm run test:cov
    
    npm run bluekit

### Testing

* Uses Jest with snapshot testing.
* Uses Jest coverage.
* Uses named and default export for a class, so that unit tests can run for a component w/o needing to wrap it in a store.

### TODO

* Bluekit currently does not support exporting multiple definitions in one file (see https://github.com/carteb/carte-blanche/issues/369)
