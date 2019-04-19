import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { _document } from '@angular/platform-browser/src/browser';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( private settings: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(color: string, link: any) {
    this.aplicarCheck(link);
    this.settings.aplicarTema(color);
  }

  aplicarCheck(link: any) {

    const arrayd = Array.prototype.slice.call(
      document.getElementsByClassName('selector')
    );

    arrayd.forEach(element => {
      element.classList.remove('working');
    });

    link.classList.add('working');
  }

  colocarCheck() {
    const tema = this.settings.ajustes.tema;

    const arrayd = Array.prototype.slice.call(
      document.getElementsByClassName('selector')
    );

    arrayd.forEach(element => {
      if (element.getAttribute('data-theme') === tema) {
        element.classList.add('working');
      }
    });
  }

}
