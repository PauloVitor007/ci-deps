const test = require('node:test');
const assert = require('node:assert');
const soma = require('./soma');

test('soma 1 + 2 e deve retornar 3', () => {
  assert.strictEqual(soma(1, 2), 3);
});