import { validateInput, validateEmail, validateNewCoworker } from "./../src/assets/js/validate.js";


describe('validateInput', () => {
    it('deberia retornar false, si el usuario no completa ningun campo solicitado', () => {
        expect(validateInput("", "", "", "")).toBe(false);
    });
});

describe('validateEmail', () => {
    it('Debería retornar false, si el correo no es valido', () => {
        expect(validateEmail('ftapiamoralesgmail.com')).toBe(false);
    })
    it('deberia retornar true si el correo es valido', () => {
        expect(validateEmail('ftapiamorales@gmail.com')).not.toBe(false);
    });
});

describe('validateNewCoworker', () => {
    it('deberia retornar false, si este campo no esta completado', () => {
        expect(validateNewCoworker("")).not.toBe(true);
    });
});