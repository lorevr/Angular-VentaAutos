import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from 'src/app/datos/auto';
import { AutosService } from 'src/app/shared/autos.service';

@Component({
  // Esta linea ya no nos sirve porque vamos a utilizar el ruteo
  // selector: 'app-detalle-autos',
  templateUrl: './detalle-autos.component.html',
  styleUrls: ['./detalle-autos.component.css']
})
export class DetalleAutosComponent implements OnInit {

  tituloPagina = "Detalle de autos";
  auto!: Auto;
  // auto: Auto | undefined;

  constructor( private _activatedRoute: ActivatedRoute, 
              private _router: Router,
              private _autosService: AutosService) { }
  
  ngOnInit(): void {
    let id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.auto = this._autosService.obtenAuto(id)!;
    this.tituloPagina += ": " + id;
  }

  onBack(): void {
    this._router.navigate(['/autos']);
  }

}
