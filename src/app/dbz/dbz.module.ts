import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainPageComponent } from './pages/main-page.component';
import { ListadoPersonajesComponent } from './components/listado-personajes/listado-personajes.component';
import { addCharacterComponent } from './components/addCharacter/addCharacter';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    mainPageComponent,
    ListadoPersonajesComponent,
    addCharacterComponent,
  ],
  exports:[
    mainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class DbzModule { }
