import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

// tslint:disable-next-line: deprecation
  constructor( private accountSettings: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this.accountSettings.aplicarTema( tema );
  }

  aplicarCheck( link: any ) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {

    const tema = this.accountSettings.ajustes.tema;
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }

    }
  }

}
