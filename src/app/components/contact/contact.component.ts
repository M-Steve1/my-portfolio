import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() mode: string = "";
  contactForm: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    message: new FormControl("", Validators.required)
  })

  submit(): void {
    if(this.contactForm.valid) this.sendEmail(this.contactForm.value);
  }

  sendEmail(values: {name: string, email: string, message: string}): void {
    const { name, email, message } = values;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: `${message} \n \n Name: ${name} \n Email: ${email}`,
    };

    emailjs
      .send('service_95bflyv', 'template_izi6kr5', templateParams, 'FeGzx3cwBrnVA-SQH')
      .then(() => {
        alert('Message sent successfully!');
        this.contactForm.reset();
      })
      .catch((err) => {
        alert('Failed to send message.');
        console.error('EmailJS error:', err);
      });
  }
}
