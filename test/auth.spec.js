import { validateEmail, validateNew, validateRegistration, validatePhone } from "./../src/assets/js/validate.js";

/*1) Validaciones para validateRegistration()*/
describe("validateRegistration", () => {
    it('deberia retornar false, si el usuario no completa ningun campo solicitado', () => {
        expect(validateRegistration("", "", "", "")).toBe(false);
    })

    it('deberia retornar true, si el usuario ingresa todos los campos', () => {
        expect(validateRegistration("Fabiola", "Orellana", "fabiola.orellana.g@gmail.com", "123456789"))
            .toBe(true);
    })

    it('deberia retornar false, si el usuario no completa correo y telefono', () => {
        expect(validateRegistration("Fabiola", "Orellana", "", "")).toBe(false);
    })
})

describe('validateEmail', () => {
    it('Debería retornar false, si el correo no es valido', () => {
        expect(validateEmail('ftapiamoralesgmail.com')).toBe(false);
    })
    it('deberia retornar true si el correo es valido', () => {
        expect(validateEmail('ftapiamorales@gmail.com')).not.toBe(false);
    });
});

/*2 Validaciones para validateNewCoworker*/
describe('validateNew', () => {
    it('deberia retornar false, si los campos no estan completados', () => {
        expect(validateNew("", "", "", "")).toBe(false);
    });  

    it('deberia retornar true, si el usuario ingresa todos los campos', () => {
        expect(validateNew("Fabiola", "Orellana", "fabiola.orellana.g@gmail.com", "123456789"))
        .toBe(true);
    });  
});

describe('validatePhone',() => {
    it('deberia retornar false, si el celular no es un número', () => {
        expect(validatePhone("GHdd")).toBe(false);
    }); 
})