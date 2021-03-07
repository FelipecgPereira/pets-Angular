import { PetsService } from './pets.service';
import { Component, OnInit } from '@angular/core';
import { Pets } from './model/pets.model';

@Component({
  selector: 'spa-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets: Pets[];
  petDetalhe: Pets;
  constructor(
    private petsService:PetsService
  ) { }

  ngOnInit(): void {
      this.listPets();
  }

  listPets(): void{
    this.pets = this.petsService.list();
    this.petDetalhe = this.pets[0];
  }

  saibaMais(id: any): void{
    const petIndex = this.pets.findIndex((obj)=>{
      return obj.id == id
    })

    this.petDetalhe = this.pets[petIndex];

  }

}
