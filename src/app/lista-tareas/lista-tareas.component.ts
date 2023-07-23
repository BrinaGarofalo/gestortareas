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
  tareaPendientes: Tarea[] = [];
  tareaCompletadas: Tarea[] = [];
  errorMensaje: string = '';

  ngOnInit() {
    this.cargarLocalStorage();
    this.actualizarListasTareas();
  }

  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this.errorMensaje = '';
      this.tarea.push({
        titulo: this.nuevaTarea,
        completed: false
      });
      this.nuevaTarea = '';
      this.actualizarListasTareas(); 
      this.guardarLocalStorage();
    } else {
      this.errorMensaje = 'Por favor, ingresa los datos de la nueva tarea';
    }
  }

  cambioTarea(task: Tarea) {
    task.completed = !task.completed;
    this.guardarLocalStorage();
    this.actualizarListasTareas();
  }

  borrarTarea(task: Tarea) {
    const index = this.tarea.indexOf(task);
    if (index !== -1) {
      this.tarea.splice(index, 1);
      this.guardarLocalStorage();
      this.actualizarListasTareas();
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

  actualizarListasTareas() {
    this.tareaPendientes = this.tarea.filter((task) => !task.completed);
    this.tareaCompletadas = this.tarea.filter((task) => task.completed);
  }
}