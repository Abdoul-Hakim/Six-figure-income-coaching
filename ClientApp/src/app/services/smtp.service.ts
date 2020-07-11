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
      Username: 'kichuprithvik@gmail.com',
      Password: '40112FDD1FFE340C82973EAA84C4BDACF6FA',
      To : email,
      From : 'kichuprithvik@gmail.com',
      Subject : 'As Promised, Here You Go...',
      Body : `Hey,\n`
       + '<p>as promised, here you get your FREE copy of this online income method.</p>\n'
       + '<p>You\'re officially invited to join us for a FREE training workshop where you’ll discover how to generate $2,500.00 per week, (Every week) online, WITHOUT experience.</p>\n'
       + '<p>>>> <a href="https://www.digistore24.com/redir/300124/Prithvik/">If this page loads, there are still spots available!!</a><p>\n'
       + '<p>On the FREE training workshop, John is going to reveal his 3-step, “People, Place, Product” system that has generated over 19,700,000.00 dollars online…</p>\n'
       + `<p>
          <ul>
            <li>NO – You don’t need any marketing experience.</li>
            <li>NO – You don’t need any tech skills. </li>
            <li>NO – You don’t need to invest any money to get started.</li>
            <li>NO – You don’t need to have your own audience. </li>
            <li>NO – You don’t need an email list.</li>
            <li>NO – You don’t even need your own product. </li>
          </ul>
        </p>`
       + '<p>>>><a href="https://www.digistore24.com/redir/300124/Prithvik/">Click here to register now for free</a></p>'
       + '<p>Even better, John is going to show you how you can get started for FREE, with “free money”. If you want to learn more, you need to register now, then show up to watch the training. </p>'
       + '<p>You won’t want to miss it LIVE because I asked John to put on a LIVE sales demo during this presentation. </p>'
       + '<p>He’ll attempt to make at least $500.00 in real-time. It’ll be interesting to see if he can do it!</p>'
       + '<p><b>Here are your workshop details:</b></p>'
       + '<p><b>When:</b> THIS WEEK… A Few Times Are Available!</p>'
       + '<p><b>Where:</b> <a href="https://www.digistore24.com/redir/300124/Prithvik/">Secure Your FREE Seat Here</a></p>'
       + '<p>Talk soon,</p>'
       + '<p>Prithvik</p>'
    }).then(value => {
      Email.send({
        Host: 'smtp.elasticemail.com',
        Username: 'kichuprithvik@gmail.com',
        Password: '40112FDD1FFE340C82973EAA84C4BDACF6FA',
        To : 'kichuprithvik@gmail.com',
        From : 'kichuprithvik@gmail.com',
        Subject : 'A new client has registred',
        Body : `<p>A new client with the email ${email} has registred!!!<p>`
      });
    });
  }
}
