import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './form.html',
})
export class Form {
  email = signal('');
  password = signal( '');
   emailTouched = signal(false);
  passwordTouched = signal(false);
   isEmailValid = computed(() => this.email().includes('@'));
  isPasswordValid = computed(() => this.password().length >= 6);
  isFormValid = computed(() => this.isEmailValid() && this.isPasswordValid());
  constructor(){
 effect(()=>{
    console.log("email:",this.email(),"password:",this.password());
  })
  }
 submit() {
    this.emailTouched.set(true);
    this.passwordTouched.set(true);
     if (!this.isFormValid()) {
      alert("Please fill the required details");
      return;
    }
    
    alert('login successfully');
    
  this.email.set('');
    this.password.set('');
    this.emailTouched.set(false);
    this.passwordTouched.set(false);
  }
}
