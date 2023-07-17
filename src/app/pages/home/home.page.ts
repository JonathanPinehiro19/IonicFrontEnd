import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

public env = environment;

  constructor() { }

  ngOnInit() {
<<<<<<< Updated upstream
=======
      this.http.get(environment.apiURL + '/articles').subscribe(
        (response) => {
          console.log(response)
          this.articles = response; // Atribua os dados ao array de artigos
        },
        (error) => {
          console.error(error);
        }
      );

>>>>>>> Stashed changes
  }

}
