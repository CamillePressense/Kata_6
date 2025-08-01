import { expect, test } from 'vitest'
import { isValid } from './isvalid.js'


const str = "";
test('empty string to return False', () => {
  expect(isValid(str)).toBe(false)
})

const number = 5;
test('number to return False', () => {
  expect(isValid(number)).toBe(false)
})

const str0 = "(";
test('( to return False', () => {
  expect(isValid(str0)).toBe(false)
})

const str1 = "()";

test('() to return True', () => {
  expect(isValid(str1)).toBe(true)
})

const str11 = "[]";

test('[] to return True', () => {
  expect(isValid(str11)).toBe(true)
})

const str12 = "{}";

test('{} to return True', () => {
  expect(isValid(str12)).toBe(true)
})


const str2 = "()[]{}";
test('()[]{} to return True', () => {
  expect(isValid(str2)).toBe(true)
})

const str3 = "(]";

test('(] to return False', () => {
  expect(isValid(str3)).toBe(false)
})

const str4 = "([])";
test('([]) to return True', () => {
  expect(isValid(str4)).toBe(true)
})

const str5 = "(())";
test('(()) to return True', () => {
  expect(isValid(str5)).toBe(true)
})

const str6 = ")()";
test(')() to return False', () => {
  expect(isValid(str6)).toBe(false)
})

