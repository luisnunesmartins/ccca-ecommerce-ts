import { validate } from '../src/cpf';

test("Valid CPF", function () {
    const isCpfValid = validate('43299293842');
    expect(isCpfValid).toBe(true);
});

test("Valid CPF with points", function () {
    const isCpfValid = validate('432.992.938-42');
    expect(isCpfValid).toBe(true);
});

test("Invalid CPF with spaces", function () {
    const isCpfValid = validate('432  293842');
    expect(isCpfValid).toBe(false);
});

test("Invalid CPF", function () {
    const isCpfValid = validate('43299293841');
    expect(isCpfValid).toBe(false);
});

test("Invalid CPF equal numbers", function () {
    const isCpfValid = validate('22222222222');
    expect(isCpfValid).toBe(false);
});

test("Null CPF", function () {
    const isCpfValid = validate(null);
    expect(isCpfValid).toBe(false);
});

test("Empty CPF", function () {
    const isCpfValid = validate('');
    expect(isCpfValid).toBe(false);
});

test("Undefined CPF", function () {
    const isCpfValid = validate(undefined);
    expect(isCpfValid).toBe(false);
});

test("CPF less than 11 digits", function () {
    const isCpfValid = validate('432992938');
    expect(isCpfValid).toBe(false);
});

test("CPF more than 14 digits", function () {
    const isCpfValid = validate('432992938422222');
    expect(isCpfValid).toBe(false);
});

test("CPF more than 14 digits with points", function () {
    const isCpfValid = validate('432.992.938-422');
    expect(isCpfValid).toBe(false);
});

test("CPF more than 14 digits with points", function () {
    const str = '22222222222';
    let valid = str.split("").every(c => c === str[0])
    expect(valid).toBe(true);
});