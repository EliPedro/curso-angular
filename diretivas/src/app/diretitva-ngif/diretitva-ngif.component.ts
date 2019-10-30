import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretitva-ngif',
  templateUrl: './diretitva-ngif.component.html',
  styleUrls: ['./diretitva-ngif.component.css']
})
export class DiretitvaNgifComponent implements OnInit {

  cursos:string[] = ["Angular 2"];
  mostrarCursos:Boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos()
  {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
