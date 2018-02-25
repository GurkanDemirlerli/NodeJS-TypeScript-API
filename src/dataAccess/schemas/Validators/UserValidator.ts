
//========================================= CHECKERS ==========================================

//======Email checkers=======

let emailLenghtChecker = (email) => {
    if (!email) {
        return false;
    } else {
        if (email.length < 5 || email.length > 30) {
            return false;
        } else {
            return true;
        }
    }
};

let validEmailChecker = (email) => {
    if (!email) {
        return false;
    } else {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regExp.test(email); // Returns true or false
    }
};

//======Username checkers=====

let usernameLengthChecker = (username) => {
    if (!username) {
        return false;
    } else {
        if (username.length < 3 || username.length > 15) {
            return false;
        } else {
            return true;
        }
    }
};

let validUsernameChecker = (username) => {
    if (!username) {
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        return regExp.test(username); // returns true or false
    }
};

//======Password Checkers============

let passwordLengthChecker = (password) => {
    if (!password) {
        return false;
    } else {
        if (password.length < 8 || password.length > 35) {
            return false;
        } else {
            return true;
        }
    }
};

let validPasswordChecker = (password) => {
    if (!password) {
        return false;
    } else {
        const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        return regExp.test(password);
    }
};

//====================================================== VALIDATORS ==================================

//====Email validators====
export const EmailValidators = [{
    validator: emailLenghtChecker,
    message: 'Email must be at least 5 characters but no more than 30'
}, {
    validator: validEmailChecker,
    message: 'Must be a valid e-mail'
}];

//====Username validators===
export const UserNameValidators = [{
    validator: usernameLengthChecker,
    message: 'username must be at lesat 3 characters but no more than 15'
}, {
    validator: validUsernameChecker,
    message: 'Username must not have any special characters'
}];

//====Password validators=====
export const PasswordValidators = [{
    validator: passwordLengthChecker,
    message: 'Password must be at least 8 characters but no more than 35'
}, {
    validator: validPasswordChecker,
    message: 'Must have at least one uppercase, lowercase, special character, and number'
}];