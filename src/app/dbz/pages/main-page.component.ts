import { Component, OnInit,  } from "@angular/core";
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  })



  export class mainPageComponent {

    public characters: Character[] = [{
      name: 'Gohan',
      power: 2500,
    }, {
      name: 'Yamcha',
      power: 1500,
    },{
      name: 'Bills',
      power: 50000,
    }
  ]
  onNewCharacter(characters: Character):void {
 this.characters.push(characters);
  }
onDeleteCharacter( index: number){
  this.characters.splice(index)
}

}
