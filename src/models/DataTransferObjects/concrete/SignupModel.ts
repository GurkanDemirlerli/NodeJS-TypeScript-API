import { validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from "class-validator";
import { ISignupModel } from './../../';

export class SignupModel implements ISignupModel {
    @Length(2, 30, { message: "your first name must be minumum 2 and maximum 30 characters" })
    firstName: string;
    @Length(2, 30)
    @Contains("hello")
    lastName: string;
    @Length(3, 20)
    userName: string;
    @IsEmail()
    email: string;
    @Length(6, 20)
    password: string;
    @Length(6, 20)
    passwordVerify: string;


    constructor(_signupModel: ISignupModel) {
        if (_signupModel.firstName)
            this.firstName = _signupModel.firstName;
        if (_signupModel.lastName)
            this.lastName = _signupModel.lastName;
        if (_signupModel.userName)
            this.userName = _signupModel.userName;
        if (_signupModel.email)
            this.email = _signupModel.email;
        if (_signupModel.password)
            this.password = _signupModel.password;
        if (_signupModel.passwordVerify)
            this.passwordVerify = _signupModel.passwordVerify;
    }

}