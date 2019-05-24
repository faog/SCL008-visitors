export const validateRegistration = (visitorFirstName, visitorLastName, visitorEmail, visitorPhone) => {
    if (visitorFirstName === "" || visitorLastName === "" || visitorEmail === "" || !validateEmail(visitorEmail ||
            visitorPhone === "" || !validatePhone(visitorPhone) || visitorPhone.length < 9 || visitorPhone.length > 9)) {
        return false;
    } else {
        return true;
    }
}

export const validateEmail = (visitorEmail) => {
    //expresión regular que simula el patrón del correo electrónico
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(visitorEmail);
};


export const validatePhone = (visitorPhone) => {
    //expresión regular que permite solo el ingreso de números
    let pattern = [0 - 9];
    return pattern.test(visitorPhone);
};

export const validateNewCoworker = (coWorkerFirstName, coWorkerLastName, coWorkerPhone) => {
    if (coWorkerFirstName === "" || coWorkerLastName === "" || coWorkerEmail === "" || !validateEmail(coWorkerEmail ||
            visitorPhone === "" || !validatePhone(coWorkerPhone) || coWorkerPhone.length < 9 || coWorkerPhone.length > 9)) {
        return false;
    } else {
        return true;
    }
}

export const validateEmailWork = (CoWorkerNewEmail) => {
    //expresión regular que simula el patrón del correo electrónico
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(CoWorkerNewEmail);
};