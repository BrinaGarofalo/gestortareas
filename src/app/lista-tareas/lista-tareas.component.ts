import { Component, OnInit } from '@angular/core';
import { Tarea } from '../interfaz/tareainterfaz'; 



@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  tarea: Tarea[] = [];
  nuevaTarea: string = '';

  ngOnInit() {
    this.cargarLocalStorage();
  }

  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      const newTask: Tarea = { titulo: this.nuevaTarea.trim(), completed: false };
      this.tarea.push(newTask);
      this.guardarLocalStorage();
      this.nuevaTarea = '';
    }
  }

  cambioTarea(task: Tarea) {
    this.guardarLocalStorage();
  }

  borrarTarea(task: Tarea) {
    const index = this.tarea.indexOf(task);
    if (index !== -1) {
      this.tarea.splice(index, 1);
      this.guardarLocalStorage();
    }
  }

  guardarLocalStorage() {
    localStorage.setItem('tarea', JSON.stringify(this.tarea));
  }

  cargarLocalStorage() {
    const guardaTarea = localStorage.getItem('tarea');
    if (guardaTarea) {
      this.tarea = JSON.parse(guardaTarea);
    }
  }
}


