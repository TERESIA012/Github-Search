import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personal: any;
  repos: any


  constructor(public githubservice: GithubService) {
    this.githubservice.getPersonalInfo().subscribe(personal => {
      console.log(personal);
      this.personal = personal;
    });


    this.githubservice.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    });
  }

  ngOnInit(): void {
  }

}
