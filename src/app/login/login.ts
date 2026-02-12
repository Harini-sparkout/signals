import { Component ,signal,computed} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

   userid = signal('');
  password = signal('');
useridTouched = signal(false);
passwordTouched= signal(false);
showPassword=signal(false);
UseridError=computed(()=>{
 if(!this.useridTouched()) return  '' ;
 return this.userid().trim()===''? 'user id is required' : '';
});
PasswordError=computed(()=>{
         if(!this.passwordTouched()) return '';
         if(this.password().trim() ===''  )return 'password is required';
         if(this.password().length < 6 )return 'password must be atleast 6 character'; return '';
});
onUseridBlur(){
  this.useridTouched.set(true);
}
onPasswordBlur(){
  this.passwordTouched.set(true);
}
togglePassword(){
  this.showPassword.update(v => !v);
}
submit(){
  this.useridTouched.set(true);
  this.passwordTouched.set(true);
 console.log('form submitted',{
 userid: this.userid(),
  password:this.password()
  });
 this.userid.set('');
 this.password.set('');
 this.useridTouched.set(false);
 this.passwordTouched.set(false);

}

}