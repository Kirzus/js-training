'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = s => {
  return s
    .toLowerCase()
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
} 
//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('Salut je suis Arnaud'), 'Salut Je Suis Arnaud')
// End of tests */
