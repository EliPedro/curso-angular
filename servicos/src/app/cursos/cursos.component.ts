import { CursosService } from './../../../../primeiro-projeto/src/app/cursos/cursos.service';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {

  cursos:string [] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit() 
  {
    this.cursos = this.cursosService.getCursos();
  }

}
