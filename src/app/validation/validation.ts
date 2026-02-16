import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, required, minLength } from '@angular/forms/signals';

interface ILoginData {
  name: string;
  password: string;
}

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validation.html',
  styleUrls: ['./validation.css'],
})
export class Validation {
  loginModel = signal<ILoginData>({ 
    name: '',
     password: '',
  });

  loginForm = form(this.loginModel, (schema) => {
    required(schema.name, { message: 'Name is required' });
    minLength(schema.name, 3, { message: 'Enter a valid name (min 3 chars)' });
    required(schema.password, { message: 'Password is required' });
    minLength(schema.password, 6, { message: 'Password must be at least 6 characters' });
  });
   onNameInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
     this.loginModel.update((m) => ({
      name: value,
      password: m.password,
    }));
  }
  onPasswordInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.loginModel.update((m) => ({
      name: m.name,
      password: value,
    }));
  }
onSubmit(event: Event) {
  event.preventDefault();
  this.loginForm.name().markAsTouched();
  this.loginForm.password().markAsTouched();
    console.log("Name:", this.loginModel().name);
  console.log("Password:", this.loginModel().password);
}


}
