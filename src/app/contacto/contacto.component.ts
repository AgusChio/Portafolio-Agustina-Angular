import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_g2o3jr7', 'template_r4xzopv', e.target as HTMLFormElement, 'Vnogd5lB5MolmHWc0')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}
