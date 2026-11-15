import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {
  private readonly initialTasks: Task[] = [
    { id: 1, title: 'Lire le cours Angular', completed: false, priority: 'high', dueDate: '2026-11-15' },
    { id: 2, title: 'Installer le CLI', completed: true, priority: 'medium', dueDate: '2026-11-12' },
    { id: 3, title: 'Créer TaskFlow', completed: false, priority: 'low', dueDate: '2026-11-20' }
  ];

  tasks: Task[] = [...this.initialTasks];

  clear() {
    this.tasks = [];
  }

  restore() {
    this.tasks = [...this.initialTasks];
  }
}