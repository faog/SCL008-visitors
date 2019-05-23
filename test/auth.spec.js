import { validateInput, validateEmail } from "./../src/assets/js/validate.js";


describe('validateInput', () => {
    it('deberia retornar false, si el usuario no completa ningun campo solicitado', () => {
        expect(validateInput("", "", "", "")).toBe(false);
    })
});

describe('validateEmail', () => {
    it('Debería retornar false, si el correo no es valido', () => {
        expect(validateEmail('ftapiamoralesgmail.com')).toBe(false);
    })
});