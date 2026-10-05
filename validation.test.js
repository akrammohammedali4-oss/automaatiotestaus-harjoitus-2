import { test } from "node:test";
import assert from "node:assert";

import { validateEmail, validatePassword, validateAge } from "./validation.js";

test("validateEmail hyväksyy tavallisen sähköpostiosoitteen", () => {
  assert.strictEqual(validateEmail("opiskelija@example.com"), true);
});

test("validateEmail hylkää osoitteen ilman @-merkkiä", () => {
  assert.strictEqual(validateEmail("opiskelija.example.com"), false);
});

test("validatePassword hylkää liian lyhyen salasanan", () => {
  assert.strictEqual(validatePassword("sala123"), false);
});

test("validatePassword hyväksyy vähintään 8 merkkiä pitkän salasanan", () => {
  assert.strictEqual(validatePassword("salasana123"), true);
});

test("validateAge hyväksyy iän 18", () => {
  assert.strictEqual(validateAge(18), true);
});

test("validateAge hylkää iän 15", () => {
  assert.strictEqual(validateAge(15), false);
});

test("validateAge hylkää iän 121", () => {
  assert.strictEqual(validateAge(121), false);
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
