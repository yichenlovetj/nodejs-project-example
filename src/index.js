/**
 * @file index.js
 * Exports a simple (throw away) addition method.
 */

// @flow

/**
 * Adds two numbers together and returns result.
 *
 * @param {number} a - First number.
 * @param {number} b - Second number.
 *
 * @returns {number} - Value of a and b added together.
 */
module.exports = (a: ?number, b: ?number) => a + b;
