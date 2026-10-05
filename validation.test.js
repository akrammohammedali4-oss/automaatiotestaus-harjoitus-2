import { test } from "node:test";
import assert from "node:assert";

import {
  validateEmail,
  validatePassword,
  validateAge
} from "./validation.js";


test("validateEmail hyväksyy tavallisen sähköpostiosoitteen", () => {
  const result = validateEmail("opiskelija@example.com");

  assert.strictEqual(result, true);
});

test("validateEmail hylkää osoitteen ilman @-merkkiä", () => {
  const result = validateEmail("opiskelija.example.com");

  assert.strictEqual(result, false);
});
