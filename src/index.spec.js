const { linter } = require('eslint');
const config = require('./index.js');

const runEslint = str => linter.verify(str, config, { filename: 'foo.js' });

describe('eslint-config-immowelt-es6', () => {
  it('should export a valid eslint config object structure.', () => {
    expect(typeof config).toBe('object');
  });

  it('should not throw errors when checking a valid code fixture.', () => {
    const errors = runEslint(`var foo = true;

if (foo) {
  console.warn('warning');
}

`);
    expect(errors).toEqual([]);
  });
});
