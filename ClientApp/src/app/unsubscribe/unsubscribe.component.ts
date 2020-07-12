import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent implements OnInit {

  response = true;
  confirmation = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  unsubscription(answer: boolean){
    if (answer){
      this.response = false;
    } else {
      this.router.navigate(['/home']);
    }
  }

  confirm(answer: boolean){
    this.confirmation = answer;
  }

}
