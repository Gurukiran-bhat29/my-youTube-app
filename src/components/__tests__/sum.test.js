import { sum } from '../sum';

test("Check sum of 2 positive numbers", () => {

  //Assertion
  expect(sum(3, 5)).toBe(8);
})