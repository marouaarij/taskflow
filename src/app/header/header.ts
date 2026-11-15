import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  title = 'TaskFlow';
  canDelete = false;

  rename() {
    this.title = this.title === 'TaskFlow' ? 'Mes tâches' : 'TaskFlow';
  }

  toggleDelete() {
    this.canDelete = !this.canDelete;
  }
}