import { Injectable } from '@angular/core';
import { Pets } from './model/pets.model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor() { }

  list(){
    return pets;
  }
}


var pets:Pets[] =[
  {
  id: 1,
  species: 'DOG',
  description: 'Mans best friend',
  imageUrl: './assets/image/dog.jpg'
},
{
  id: 2,
  species: 'CAT',
  description: 'Smart and agile animals',
  imageUrl: './assets/image/cat.jpg'
},
{
  id: 3,
  species: 'Bunny',
  description: 'Carrot eaters',
  imageUrl: './assets/image/bunny.jpg'
},
]
