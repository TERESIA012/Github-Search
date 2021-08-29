import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  // personal: any;
  repos: any;
  // user: string;


  constructor(private githubservice: GithubService) {
    // this.githubservice.getPersonalInfo().subscribe(personal => {
    //   console.log(personal);
    //   this.personal = personal;
    // });


    this.githubservice.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    });


    
  }








  // repos: any;
  // repo:string;


  // constructor(private githubservice: GithubService) { 
   
  //   this.githubservice.findUserName(this.repo)


  //   this.githubservice.getRepos().subscribe(repos => {
  //     console.log(repos);
  //     this.repos=repos;
  //   });


  // }
  

  ngOnInit(): void {
  }

}
