import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  personal: any;
  user: string;


  constructor(private githubservice: GithubService) {

  }



  findUser() {
    this.githubservice.findUserName(this.user)
    

    this.githubservice.getPersonalInfo().subscribe(personal => {

      this.personal = personal;
    });
  }
  

  ngOnInit(): void {
  }

}
