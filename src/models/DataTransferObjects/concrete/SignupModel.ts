import { validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, Matches, Equals, ValidateIf } from "class-validator";
import { ISignupModel } from './../../';

export class SignupModel implements ISignupModel {

    @Length(2, 20, { message: "your first name must be minumum 2 and maximum 30 characters" })
    @Matches(/^[a-zA-Z0-9]+$/, "Only alphanuremic characters allowed")
    firstName: string;

    @Length(2, 20, { message: "your lastname name must be minumum 2 and maximum 30 characters" })
    @Matches(/^[a-zA-Z0-9]+$/, "Only alphanuremic characters allowed")
    lastName: string;

    @Length(4, 15, { message: "your username name must be minumum 4 and maximum 15 characters" })
    @Matches(/^[a-zA-Z0-9]+$/, "Only alphanuremic characters allowed")
    userName: string;

    @IsEmail()
    email: string;

    @Matches(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/, "Password Must have at least one uppercase, lowercase, special character, and number")
    password: string;

    @Matches(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/, "Password Must have at least one uppercase, lowercase, special character, and number")
    @ValidateIf(o => o.password === o.passwordVerify)
    passwordVerify: string;


    constructor(_signupModel: ISignupModel) {
        // if (_signupModel.firstName)
        this.firstName = _signupModel.firstName;
        // if (_signupModel.lastName)
        this.lastName = _signupModel.lastName;
        // if (_signupModel.userName)
        this.userName = _signupModel.userName;
        // if (_signupModel.email)
        this.email = _signupModel.email;
        // if (_signupModel.password)
        this.password = _signupModel.password;
        // if (_signupModel.passwordVerify)
        this.passwordVerify = _signupModel.passwordVerify;
    }

}