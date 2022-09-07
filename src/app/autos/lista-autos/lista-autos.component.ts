import { Component, OnInit } from "@angular/core";

import { Auto } from 'src/app/datos/auto';
import { AutosService } from "src/app/shared/autos.service";

@Component({
    selector: "lista-autos",
    templateUrl: "./lista-autos.component.html"
})

export class ListaAutosComponent implements OnInit {
    tituloListaAutos: string = "Lista de Automóviles";
    listaAutos: Auto[] = [];
    listaAutosFiltrados: Auto[] = [];

    imageWidth = 150;
    imageMargin = 2;
    muestraImagen: boolean = false;

    private _filtro: string = "";

    get filtro(): string {
        return this._filtro;
    }

    set filtro( filtrarPor: string ) {
        filtrarPor = filtrarPor.toLowerCase();
        this.listaAutosFiltrados = this.listaAutos.filter(
            ( auto: Auto ) => auto.marca.toLowerCase().includes( filtrarPor )        
        );
        console.log(filtrarPor);
    }

    constructor(private _autosService: AutosService) { }

    ngOnInit(): void {
        this.listaAutos = this._autosService.obtenListaAutos();
        // this.listaAutos = [
        //     {
        //         id: 1,
        //         marca: "Buik",
        //         modelo: "Encore",
        //         anio: 2018,
        //         color: "Gris",
        //         kilometros: 25060,
        //         precio: 377999,
        //         calificacion: 5,
        //         imagenUrl: "assets/imagenAutos/Buik Encore.jpeg",
        //     },
        //     {
        //         id: 2,
        //         marca: "Chevrolet",
        //         modelo: "Sonic",
        //         anio: 2015,
        //         color: "Gris",
        //         kilometros: 64575,
        //         precio: 148999,
        //         calificacion: 3,
        //         imagenUrl: "assets/imagenAutos/Chevrolet Sonic.jpeg" 
        //     },
        //     {
        //         id: 3,
        //         marca: "Mazda",
        //         modelo: "CX-3",
        //         anio: 2017,
        //         color: "Rojo",
        //         kilometros: 75934,
        //         precio: 285999,
        //         calificacion: 4,
        //         imagenUrl: "assets/imagenAutos/Mazda CX-3.jpeg"
        //     }, 
        //     {
        //         id: 4,
        //         marca: "Fiat",
        //         modelo: "Fiat 500",
        //         anio: 2016,
        //         color: "Negro",
        //         kilometros: 43420,
        //         precio: 275999,
        //         calificacion: 3,
        //         imagenUrl: "assets/imagenAutos/Fiat Fiat.jpeg",
        //     }, 
        //     {
        //         id: 5,
        //         marca: "Volkswagen",
        //         modelo: "Vento",
        //         anio: 2018,
        //         color: "Azul",
        //         kilometros: 74093,
        //         precio: 222999,
        //         calificacion: 4,
        //         imagenUrl: "assets/imagenAutos/Volkswagen Vento.jpeg",
        //     } 
        // ];
        this.listaAutosFiltrados = this.listaAutos;
    }

    // llenaAutos(): Auto[] {
    //     let listaAutos: Auto[] = [
    //         {
    //             id: 1,
    //             marca: "Buik",
    //             modelo: "Encore",
    //             anio: 2018,
    //             color: "Gris",
    //             kilometros: 25060,
    //             precio: 377999,
    //             calificacion: 5,
    //             imagenUrl: "assets/imagenAutos/Buik Encore.jpeg",
    //         },
    //         {
    //             id: 2,
    //             marca: "Chevrolet",
    //             modelo: "Sonic",
    //             anio: 2015,
    //             color: "Gris",
    //             kilometros: 64575,
    //             precio: 148999,
    //             calificacion: 3,
    //             imagenUrl: "assets/imagenAutos/Chevrolet Sonic.jpeg" 
    //         },
    //         {
    //             id: 3,
    //             marca: "Mazda",
    //             modelo: "CX-3",
    //             anio: 2017,
    //             color: "Rojo",
    //             kilometros: 75934,
    //             precio: 285999,
    //             calificacion: 4,
    //             imagenUrl: "assets/imagenAutos/Mazda CX-3.jpeg"
    //         }, 
    //         {
    //             id: 4,
    //             marca: "Fiat",
    //             modelo: "Fiat 500",
    //             anio: 2016,
    //             color: "Negro",
    //             kilometros: 43420,
    //             precio: 275999,
    //             calificacion: 3,
    //             imagenUrl: "assets/imagenAutos/Fiat Fiat.jpeg",
    //         }, 
    //         {
    //             id: 5,
    //             marca: "Volkswagen",
    //             modelo: "Vento",
    //             anio: 2018,
    //             color: "Azul",
    //             kilometros: 74093,
    //             precio: 222999,
    //             calificacion: 4,
    //             imagenUrl: "assets/imagenAutos/Volkswagen Vento.jpeg",
    //         } 
    //     ];

    //     return this.listaAutos;
    // }

    toggleImage(): void {
        this.muestraImagen = !this.muestraImagen;
    }

    onClickCalificacion(mensaje: string): void {
        alert("Dieron click en la calificación: " + mensaje);
    }
}
