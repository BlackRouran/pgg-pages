const test = require('ava')
const pggPages = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => pggPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(pggPages('w'), 'w@zce.me')
  t.is(pggPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
