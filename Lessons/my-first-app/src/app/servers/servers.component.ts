import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
    .white-text {
      color: white;
    }
  `]
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = "No server was created";
	serverName = '';
	userName = '';
	serverCreated = false;
	servers = ['testServer', 'testServer 2'];

  clicks = [];
	showPassword = false;

  constructor() {
  	setTimeout(() => {
  		this.allowNewServer = true;
  	}, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  	this.serverCreationStatus = 'Server was created~! Name is ' + this.serverName;
  }

  togglePassword() {
    this.showPassword = !(this.showPassword);
	  this.clicks.push(new Date());
  }

  getColor() {
    console.log("clicks length: " + (this.clicks.length >= 5));
    return this.clicks.length >= 5 ? 'blue' : 'none';
  }

  onUpdateServerName(event: Event) {
  	//console.log(event);
  	this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName() {
    this.userName = '';
  }

}
