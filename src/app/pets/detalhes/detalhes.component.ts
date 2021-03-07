import { Component, Input, OnInit } from '@angular/core';
import { Pets } from '../model/pets.model';

@Component({
  selector: 'spa-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  constructor() { }

  @Input() species: string;
  @Input() description: string;
  @Input() imgUrl: string;


  ngOnChanges():void{

  }

  ngOnInit(): void {
  }

}
