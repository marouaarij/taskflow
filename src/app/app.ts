import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Header } from './header/header';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [Navbar, Header, TaskForm, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}