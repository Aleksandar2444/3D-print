import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import * as emailjs from 'emailjs-com';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FooterComponent,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    TranslateModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  public onSubmit() {
    if (this.contactForm.valid) {
      const values = this.contactForm.value;
      const templateParams = {
        from_name: `${values.firstName} ${values.lastName}`,
        from_email: values.email,
        message_html: values.message
      };

      emailjs.send(
        environment.email.emailService,
        environment.email.emailTemplateKey,
        templateParams,
        environment.email.emailApiKey
      ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.contactForm.reset();
      }, (err) => {
        console.log('FAILED...', err);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
