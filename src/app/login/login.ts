import { Component ,signal,computed} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
form = new FormGroup ({
        userid :new FormControl("",Validators.required) ,
        password: new FormControl ("", [Validators.required,Validators.minLength(6)])
})

showPassword=signal(false);
UseridError=computed(()=>{
  const value = this.form.controls.userid.value ?? '';
  if(!this.form.controls.userid.touched)return '';
  return value.trim() === ''? 'useridrequired': '';
});
PasswordError=computed(() =>{
         const value = this.form.controls.password.value ?? '';
         if(!this.form.controls.password.touched) return '';
         if(value.trim()==='' )return 'password required';
         if(value.length < 6) return 'min 6 characters';
          return '';
});
togglePassword(){
  this.showPassword.update(v => !v);
}
submit(){
 this.form.markAllAsTouched();
 if(this.UseridError() || this.PasswordError()) return;
 console.log(this.form.value);
 this.form.reset();

}

}
