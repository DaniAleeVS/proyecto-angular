import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Viuda Negra';
  public edad: number = 35;
  public RealName: string = 'Natasha Maximoff';

  get capitalizedName () :string {
    return this.name.toUpperCase();
    }

    getheroDescription () :string {
      return `${this.name}- ${this.edad}-${this.RealName}`;
    }
changeHero():void {
 this.name = 'Pantera Negra';
 this.RealName = 'Tchalla';
}

changeEdad() :void {
this.edad =38;
}
resetForm ():void{
this.name = 'Viuda Negra';
this.edad = 35
this.RealName = 'Natasha Maximoff';
};
}
