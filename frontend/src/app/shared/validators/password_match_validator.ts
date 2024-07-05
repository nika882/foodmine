import { AbstractControl } from "@angular/forms";
export const PasswordMatchValidator=(passwordControlName:string,
    confirmPasswordControloName:string)=>{
        const Validators=(form:AbstractControl)=>{
            const passwordControl=form.get(passwordControlName);
            const confirmPasswordControl=form.get(confirmPasswordControloName);
            if(!passwordControl||!confirmPasswordControl)return;
            if(passwordControl.value!==confirmPasswordControl.value){
                confirmPasswordControl.setErrors({notMatch:true})
            }
            else{
                const error=confirmPasswordControl.errors;
                if(!error)return;
                delete error.notMatch;
                confirmPasswordControl.setErrors(error);
            }
        }
        return Validators;
    }