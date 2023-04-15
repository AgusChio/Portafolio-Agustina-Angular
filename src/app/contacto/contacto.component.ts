import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


import Swal from 'sweetalert2';

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
        Swal.fire({
          text: '¡Correo enviado!',
          icon: 'success'
        }).then(() => {
          window.location.reload();
        });
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          text: 'Por favor, verifique que haya completado todos los campos, de otra manera intente mas tarde. Muchas gracias!',
          icon: 'error'
        });
      });
  }

}
