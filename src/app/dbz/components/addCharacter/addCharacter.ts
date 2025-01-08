import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-addCharacter',
  templateUrl: './addCharacter.html',
})

export class addCharacterComponent {


@Output()
  public onNewCharacter: EventEmitter<Character> = new  EventEmitter();

  public characters: Character= {
    name : "jason",
    power: 400
  }
  emitCharacter (): void {
if (this.characters.name.length ===0) return;

this.onNewCharacter.emit (this.characters);

this.characters= { name: " ", power: 0 }
  }

}
