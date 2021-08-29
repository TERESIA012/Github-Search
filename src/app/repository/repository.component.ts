import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos: any;
  repo:string;


  constructor(private githubservice: GithubService) { 
   
    this.githubservice.findUserName(this.repo)


    this.githubservice.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    });


  }
  

  ngOnInit(): void {
  }

}
