export const validateRegistration = (visitorFirstName, visitorLastName, visitorEmail, visitorPhone) => {
    if (visitorFirstName === "" || visitorLastName === "" || visitorEmail === "" || !validateEmail(visitorEmail) ||
        visitorPhone === "" || !validatePhone(visitorPhone) || visitorPhone.length != 9) {
        return false;
    } else {
        return true;
    }
}

export const validateNew = (coworkerFirstName, coworkerLastName, coworkerEmail, coworkerPhone) => {
        if (coworkerFirstName === "" || coworkerLastName === "" || coworkerEmail === "" || !validateEmail(coworkerEmail) ||
            coworkerPhone === "" || !validatePhone(coworkerPhone) || coworkerPhone.length != 9) {
            return false;
        } else {
            return true;
        }
    }
    /*
    export const validateInput = (fullName, email, visitCompany, whoVisit) => {
        if (fullName === "" || email === "" || visitCompany === "" || whoVisit === "") {
            return false;
        } else {
            return true;
        }
    };
    */
export const validateEmail = (email) => {
    //expresión regular que simula el patrón del correo electrónico
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
};

export const validatePhone = (phone) => {
    //expresión regular que permite solo el ingreso de números
    let pattern = /^[0-9]+$/;
    return pattern.test(phone);
};

export const validateNewCoworker = (coWorkerFirstName, coWorkerLastName, coWorkerPhone) => {
    if (coWorkerFirstName === "" || coWorkerLastName === "" || coWorkerEmail === "" || !validateEmail(coWorkerEmail ||
            visitorPhone === "" || !validatePhone(coWorkerPhone) || coWorkerPhone.length < 9 || coWorkerPhone.length > 9)) {
        return false;
    } else {
        return true;
    }
};