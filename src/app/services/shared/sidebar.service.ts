import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
menu: any = [
  {
    titulo: 'Menu Principal',
    icono: 'mdi mdi-gauge',
    submenu: [{
      titulo: 'dashboard', url: '/dashboard'
    },
    {
      titulo: 'Barra de Progreso', url: '/progress'
    },
    {
      titulo: 'Graficas', url: '/graficas1'
    },
    { titulo: 'promesas', url: '/promesas'},
    { titulo: 'Rxjs', url: '/rxjs'},
  ]
  }
];
  constructor() { }
}
