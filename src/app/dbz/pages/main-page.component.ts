<<<<<<< HEAD
import { Component, OnInit,  } from "@angular/core";
import { Character } from '../interfaces/character.interface';
=======
import { Component,  } from "@angular/core";
import { Character } from "../interfaces/character.interface";
>>>>>>> d748257828d0a11d500367900b08a6197e859cb0

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
<<<<<<< HEAD

  ]
  onNewCharacter(characters: Character):void {
 this.characters.push(characters);

  }
}
=======
  ]}
>>>>>>> d748257828d0a11d500367900b08a6197e859cb0
