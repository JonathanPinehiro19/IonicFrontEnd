import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  users: any;

  age: any;

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
// function calcularIdade(dataNascimento: string): number {
//   const dataAtual = new Date();
//   const dataNasc = new Date(dataNascimento);
//   let idade = dataAtual.getFullYear() - dataNasc.getFullYear();

//   if (
//     dataAtual.getMonth() < dataNasc.getMonth() ||
//     (dataAtual.getMonth() === dataNasc.getMonth() &&
//       dataAtual.getDate() < dataNasc.getDate())
//   ) {
//     idade -= 1;
//   }

//   return idade;
// }
}
