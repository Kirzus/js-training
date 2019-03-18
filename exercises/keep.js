'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = str => str[0] + str[1]
const keepLast = str => str[str.length - 2] + str[str.length - 1]
const keepFirstLast = str => str[3] + str[4]
//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('bonsoir'), 'bo')
assert.strictEqual(keepLast('bonsoir'), 'ir')
assert.strictEqual(keepFirstLast('bonsoir'), 'so')

// End of tests */
