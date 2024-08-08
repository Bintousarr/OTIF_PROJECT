import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private registerService: RegisterService){


    this.registrationForm = this.fb.group({
      titre: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      genre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      pays: ['', Validators.required],
      participation: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.registerService.register(this.registrationForm.value).subscribe(
        response => {
          console.log('Inscription réussie !', response);
        },
        error => {
          console.error('Erreur lors de l\'inscription', error);
        }
      );
    }
  }
}
