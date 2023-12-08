import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {
  @Input() task: any = {};
  @Output() createOrUpdateTask = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  // Implementa funciones para crear y actualizar tareas
}
