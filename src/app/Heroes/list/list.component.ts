import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public HeroNames : string[] =['Capitan America', 'Hawkeye', 'Bruja Escarlata', 'Pantera Negra'];
  public DeletedHero?: string;

  removeLatHero():void{
    this.DeletedHero = this.HeroNames.pop();

  }
}
