import { validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, Matches, Equals, ValidateIf, NotEquals } from "class-validator";
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

    @Matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    email: string;

    // @Equals(this.password === this.passwordVerify)// PROBLEM: Search for how to use 
    @Matches(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/, "Password Must have at least one uppercase, lowercase, special character, and number")
    password: string;


    @Matches(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/, "Password Must have at least one uppercase, lowercase, special character, and number")
    passwordVerify: string;


    constructor(_signupModel: ISignupModel) {
        this.firstName = _signupModel.firstName;
        this.lastName = _signupModel.lastName;
        this.userName = _signupModel.userName;
        this.email = _signupModel.email;
        this.password = _signupModel.password;
        this.passwordVerify = _signupModel.passwordVerify;
    }
}