import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public env = environment;

  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Contatos', url: '/contacts', icon: 'chatbubbles' },
<<<<<<< Updated upstream
    { title: 'Sobre', url: '/about', icon: 'information-circle' }
=======
    { title: 'Sobre-Nós', url: '/aboutus', icon: 'people' },
    { title: 'Política de Privacidade', url: '/about', icon: 'information-circle' }
>>>>>>> Stashed changes
  ];

  public appUser = {
    logged: false,
    title: 'Login / Entrar',
    url: '/login',
    icon: 'log-in',
    avatar: ''
  }

  constructor() { }
}
