import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretitva-ngswitch',
  templateUrl: './diretitva-ngswitch.component.html',
  styleUrls: ['./diretitva-ngswitch.component.css']
})
export class DiretitvaNgswitchComponent implements OnInit {

  aba:string = 'home';
  
  constructor() { }

  ngOnInit() {
  }

}
