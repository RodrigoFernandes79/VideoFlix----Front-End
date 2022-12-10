import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email = "";
	senha = "";

  constructor() { }

  ngOnInit(): void {
  }

	login(){
		console.log(this.email);
		console.log(this.senha);
	}

}
