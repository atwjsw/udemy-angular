import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors {
        if ((control.value as string).indexOf(' ') > - 1)
            return { cannotContainSpace: true };
        return null;
    }

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('ok');
                if (control.value === 'abc')
                    resolve({ shouldBeUnique: true});
                 else resolve(null);
            }, 2000);
        });
    }
}