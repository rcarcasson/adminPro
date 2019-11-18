import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '../../services/settings.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public sidebar: SidebarService, public usuarioService: UsuarioService) { }

  ngOnInit() {
  }

}
