import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';
import { AEspacioPipe } from './shared/a-espacio.pipe';
import { EstrellasComponent } from './shared/estrellas/estrellas.component';
import { DetalleAutosComponent } from './autos/detalle-autos/detalle-autos.component';
import { InicioComponent } from './autos/inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutosComponent,
    AEspacioPipe,
    EstrellasComponent,
    DetalleAutosComponent,
    InicioComponent,
    ClientesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: "autos", component: ListaAutosComponent },
      { path: "auto/:id", component: DetalleAutosComponent },
      { path: "inicio", component: InicioComponent },
      { path: "clientes", component: ClientesComponent },
      { path: "", redirectTo: "inicio", pathMatch: "full" },
      { path: "**", redirectTo: "inicio", pathMatch: "full" },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
