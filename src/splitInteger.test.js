'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 2)).toEqual([5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {

});

test('should sort parts ascending if they are not equal', () => {

});

test('should add zeros if value < numberOfParts', () => {

});
