import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-listado-personajes',
  templateUrl: './listado-personajes.html',
})

export class ListadoPersonajesComponent {
  @Input()
  public ListCharacter: Character []=[
    { name: 'Videl', power: 500,},
    { name: 'Vulma',  power: 900}
  ];
// onDelete= index value: number;


 onDeleteCharacter (index: number): void{


    console.log ({index})
 }
}
