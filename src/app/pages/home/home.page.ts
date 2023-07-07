import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public response = environment.apiURL + '/articles';

  loadArticle(){
    this.http.get(environment.apiURL + '/articles').subscribe((response)=>{
      console.log(response);
      `${response}`
     },(error)=>{
      console.error(error)
   })
  }

  public env = environment;

  constructor(private http: HttpClient) { }

  ngOnInit(content = JSON) {

     this.http.get(environment.apiURL + '/articles').subscribe((response)=>{
      console.log(response)
     },(error)=>{
      console.error(error)
   })

  }



  // showMostViewd(limit: number){
  //   this.http.get(environment.apiURL + `articles/views/${limit}`).subscribe((responseMost) =>{
  //     console.log(responseMost)
  //   },(error)=>{console.error(error)
  //   })
  // }

}
