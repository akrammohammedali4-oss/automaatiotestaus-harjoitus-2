export function validateEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePassword(password) {
  return typeof password === "string" && password.length >= 8;
}

export function validateAge(age) {
  return Number.isInteger(age) && age >= 16 && age <= 120;
}
