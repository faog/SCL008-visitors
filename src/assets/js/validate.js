export const validateInput = (fullName, email, visitCompany, whoVisit) => {
    if (fullName === "" || email === "" || visitCompany === "" || whoVisit === "") {
        return false;
    } else {
        return true;
    }
};

export const validateEmail = (email) => {
    //expresión regular que simula el patrón del correo electrónico
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
};

export const validateNewCoworker = (companyName) => {
    if (companyName === "") {
        return false;
    } else {
        return true;
    }
};