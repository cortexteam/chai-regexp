const chai = require('chai')
chai.use(require('../index'))
const { expect } = chai

describe('chai-regexp', () => {

  context('when comparing equivalient RegExp objects', () => {

    it('should expect RegExp objects to be equal', () => {
      var a = /pattern/
      var b = /pattern/

      expect(a).to.equal(b)
    })

    it('should expect RegExp objects with flags to be equal', () => {
      var a = /pattern/i
      var b = /pattern/i

      expect(a).to.equal(b)
    })

  })

  context('when comparing non-equivalient RegExp objects', () => {

    it('should expect RegExp objects to not be equal', () => {
      var a = /pattern/
      var b = /pattern1/

      expect(a).to.not.equal(b)
    })

    it('should expect RegExp objects with different flags to not be equal', () => {
      var a = /pattern/i
      var b = /pattern/g

      expect(a).to.not.equal(b)
    })

  })

  context('when comparing RegExp object to non-RegExp object', () => {

    it('should expect objects to not be equal', () => {
      var a = /pattern/
      var b = { 'key': 'value' }

      expect(a).to.not.equal(b)
    })

  })

})
