import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  users: any;
  public env = environment;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(environment.apiURL + '/usuarios').subscribe(
      (response) => {
        console.log(response)
        this.users = response; // Atribua os dados ao array de artigos
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
