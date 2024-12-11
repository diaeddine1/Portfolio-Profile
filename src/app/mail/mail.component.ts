import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';
@Component({
  selector: 'mail',
  standalone: true,
  imports: [],
  templateUrl: './mail.component.html',
  styleUrl: './mail.component.css'
})
export class MailComponent {

  SERVICE_ID = environment.YOUR_SERVICE_ID
  TEMPLATE_ID = environment.YOUR_TEMPLATE_ID
  PUBLIC_KEY = environment.YOUR_PUBLIC_KEY
 
  public sendEmail(e: Event) {
    e.preventDefault();

 

    emailjs
      .sendForm(this.SERVICE_ID!, this.TEMPLATE_ID!, e.target as HTMLFormElement, {
        publicKey: this.PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          (e.target as HTMLFormElement).reset();
          
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          
        },
      );
  }



}
