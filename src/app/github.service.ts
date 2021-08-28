import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string;
  private clientToken: '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';


  constructor(private httpClient: HttpClient) {
    console.log("service is now ready!");
    this.username = "TERESIA012";

  }
  getPersonalInfo() {
    return this.httpClient.get("https://api.github.com/users/" + this.username + "?client_Token=" + this.clientToken);
  .map(res =>res.json());
  }



}
