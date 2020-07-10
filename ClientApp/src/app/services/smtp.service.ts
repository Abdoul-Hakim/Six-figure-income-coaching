import { Injectable } from '@angular/core';
import '../../assets/js/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class SmtpService {

  constructor() { }

  async connect(email: string) {
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'hakim.billa01@gmail.com',
      Password: '7ED7F08C6C3C4E39ADA7C3C8E8845059EDDC',
      To : email,
      From : 'hakim.billa01@gmail.com',
      Subject : 'This is the subject',
      Body : 'And this is the body'
    });
  }
}
