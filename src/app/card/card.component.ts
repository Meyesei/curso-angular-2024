import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
public image:string="https://opensource.google/images/projects/os-projects-angular_thumbnail.png";
public Titulo:string="Curso de Angular con Interpolacion";
constructor() { }

ngOnInit(): void {
  
}
}
