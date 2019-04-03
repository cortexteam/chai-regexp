'use strict'

module.exports = function (_chai, utils) {

  function regExpEqual(x, y) {
    return x.source === y.source
        && x.global === y.global
        && x.ignoreCase === y.ignoreCase
        && x.multiline === y.multiline
  }

  _chai.Assertion.overwriteMethod('equal', function (_super) {
    return function (other) {
      var obj = this._obj
      if (obj instanceof RegExp && other instanceof RegExp) {
        const expected = other
        const actual = obj

        this.assert(
            regExpEqual(obj, other)
          , 'expected #{this} to equal #{exp} but got #{act}'
          , 'expected #{this} to not be equal to #{act}'
          , expected
          , actual
        )
      } else {
        _super.apply(this, arguments)
      }
    }
  })

}
