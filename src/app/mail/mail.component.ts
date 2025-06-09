import { AfterViewInit, Component, OnInit } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';
@Component({
  selector: 'mail',
  standalone: true,
  imports: [],
  templateUrl: './mail.component.html',
  styleUrl: './mail.component.css'
})
export class MailComponent  implements OnInit{

  ngOnInit(): void {
      const close = document.getElementById('close') as HTMLButtonElement;
      const alert = document.getElementById('alert') as HTMLDivElement;
      const email = document.getElementById('email') as HTMLSpanElement;

      alert.classList.remove('show');
      close.addEventListener('click', () => {
        
        alert.classList.remove('show');
        email.innerText="Attempting to Send ...";
      });
      
  }
  

  SERVICE_ID = environment.YOUR_SERVICE_ID
  TEMPLATE_ID = environment.YOUR_TEMPLATE_ID
  PUBLIC_KEY = environment.YOUR_PUBLIC_KEY
 
  public sendEmail(e: Event) {
    e.preventDefault();
    const alert = document.getElementById('alert') as HTMLDivElement;
    const email = document.getElementById('email') as HTMLSpanElement;
    alert.classList.add('show');

    emailjs
      .sendForm(this.SERVICE_ID!, this.TEMPLATE_ID!, e.target as HTMLFormElement, {
        publicKey: this.PUBLIC_KEY,
      })
      .then(
        () => {
          
          console.log('SUCCESS!');
          (e.target as HTMLFormElement).reset();
          alert.classList.add('show');
          alert.style.backgroundColor = 'green';
          email.innerText= 'Email sent successfully!';
          
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          alert.classList.add('show');
          alert.style.backgroundColor = 'red';
          email.innerText = 'Failed to send email. Please try again later.';
        },
      );
  }



}
