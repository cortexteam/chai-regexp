# chai-regexp
Chai extension for asserting regular expressions

### Install:
```
npm install chai-regexp --save-dev
```

### Usage:
```javascript
const chai = require('chai')
chai.use(require('chai-regexp'))
const { expect } = chai

// write assertions using equal method
expect(/a/).to.equal(/a/)
```
