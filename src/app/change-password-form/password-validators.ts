import { ValidationErrors, AbstractControl } from "@angular/forms";

export class PasswordValidators {

    // static isOldPasswordValid(control: AbstractControl): ValidationErrors {
       
    //             if (control.value !== '1234') {
    //                 return ({ isOldPasswordValid: true});
    //             } else {
    //                 return null;
    //             }
    // }

    static isOldPasswordValid(control: AbstractControl): Promise<ValidationErrors> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== '1234') {
                    resolve({ isOldPasswordValid: true});
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

    static passwordMatch(control: AbstractControl): ValidationErrors {
       
                if (control.get('newPassword').value !== control.get('confirmPassword').value) {
                    return ({ passwordMatch: true});
                } else {
                    return null;
                }
    }


}