import { test } from "node:test";
import assert from "node:assert";

import { validateEmail, validatePassword, validateAge } from "./validation.js";

test("validateEmail hyväksyy tavallisen sähköpostiosoitteen", () => {
  const result = validateEmail("opiskelija@example.com");

  assert.strictEqual(result, true);
});

test("validateEmail hylkää osoitteen ilman @-merkkiä", () => {
  const result = validateEmail("opiskelija.example.com");

  assert.strictEqual(result, false);
});

test("validatePassword hylkää liian lyhyen salasanan", () => {
  const result = validatePassword("sala123");

  assert.strictEqual(result, false);
});

test("validatePassword hyväksyy vähintään 8 merkkiä pitkän salasanan", () => {
  const result = validatePassword("salasana123");

  assert.strictEqual(result, true);
});

test("validateAge hyväksyy iän 18", () => {
  const result = validateAge(18);

  assert.strictEqual(result, true);
});

test("validateAge hylkää iän 15", () => {
  const result = validateAge(15);

  assert.strictEqual(result, false);
});

test("validateAge hylkää iän 121", () => {
  const result = validateAge(121);

  assert.strictEqual(result, false);
});

test("validateEmail hylkää tyhjän merkkijonon", () => {
  assert.strictEqual(validateEmail(""), false);
});

test("validatePassword hylkää tyhjän merkkijonon", () => {
  assert.strictEqual(validatePassword(""), false);
});

test("validateAge hylkää merkkijonona annetun iän", () => {
  assert.strictEqual(validateAge("18"), false);
});

test("validateAge hylkää desimaaliluvun", () => {
  assert.strictEqual(validateAge(18.5), false);
});

test("validateEmail hylkää virheellisen osoitteen @test.", () => {
  assert.strictEqual(validateEmail("@test."), false);
});
