import { Injectable } from "@angular/core";
import { Auto } from "../datos/auto";

@Injectable({
    providedIn: "root"
})

export class AutosService {

    obtenListaAutos(): Auto[] {
        let listaAutos = this._determinaListaAutos();
        return listaAutos;
    }

    public obtenAuto( id: number ) {
        let listaAutos = this._determinaListaAutos();
        return listaAutos.find(auto => auto.id == id);
    }

    private _determinaListaAutos(): Auto[] {
        let listaAutos = [
            {
                id: 1,
                marca: "Buik",
                modelo: "Encore",
                anio: 2018,
                color: "Gris",
                kilometros: 25060,
                precio: 377999,
                calificacion: 5,
                imagenUrl: "assets/imagenAutos/Buik Encore.jpeg",
            },
            {
                id: 2,
                marca: "Chevrolet",
                modelo: "Sonic",
                anio: 2015,
                color: "Gris",
                kilometros: 64575,
                precio: 148999,
                calificacion: 3,
                imagenUrl: "assets/imagenAutos/Chevrolet Sonic.jpeg" 
            },
            {
                id: 3,
                marca: "Mazda",
                modelo: "CX-3",
                anio: 2017,
                color: "Rojo",
                kilometros: 75934,
                precio: 285999,
                calificacion: 4,
                imagenUrl: "assets/imagenAutos/Mazda CX-3.jpeg"
            }, 
            {
                id: 4,
                marca: "Fiat",
                modelo: "Fiat 500",
                anio: 2016,
                color: "Negro",
                kilometros: 43420,
                precio: 275999,
                calificacion: 3,
                imagenUrl: "assets/imagenAutos/Fiat Fiat.jpeg",
            }, 
            {
                id: 5,
                marca: "Volkswagen",
                modelo: "Vento",
                anio: 2018,
                color: "Azul",
                kilometros: 74093,
                precio: 222999,
                calificacion: 4,
                imagenUrl: "assets/imagenAutos/Volkswagen Vento.jpeg",
            } 
        ];
        return listaAutos;
    }
}

