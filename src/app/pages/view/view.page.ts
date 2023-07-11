import { Component, inject, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  public articleId!: string;
  private activatedRoute = inject(ActivatedRoute);
  public article: any;
  public user: any;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.articleId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log(this.articleId)

    //Pega as Artigos para Apresentar na View.
    this.http.get(environment.apiURL + `/articles/${this.articleId}`).subscribe(
      (response) => {
        console.log(response)
        this.article = response; // Atribua os dados ao array de artigos
      },
      (error) => {
        console.error(error);
      }
    );
    //Pega os usuarios para apresentar na View
    this.http.get(environment.apiURL + '/usuarios').subscribe(
      (responseUser) => {
        console.log(responseUser)
        this.user = responseUser; // Atribua os dados ao array de artigos
      },
      (error) => {
        console.error(error);
      }
    );

  }




}

// showArticle(){
//   this.http.get(environment.apiURL + `/article/${this.articleId}`).subscribe
//  (this.actualArticle)

// }
