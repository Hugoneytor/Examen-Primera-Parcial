class Ruta{
    constructor(nombre, tiempoMin,lugar){
        this._nombre = nombre;
        this._tiempoMin = tiempoMin;
        this._lugar = lugar;
    }
    get nombre(){
       return this._nombre;
    }
    get tiempo(){
        return this._tiempoMin;
    }
    get lugar(){
        return this._lugar;
    }
    set nombre(){
        this._nombre = nombre;
    }
    set tiempo(){
        this._tiempoMin = tiempo;
    }
    set lugar(){
        this._lugar = lugar;
    }
}

class Bases{
    constructor(nombre,latitud,longitud){
        this._nombre = nombre;
        this._latitud = latitud;
        this._longitud = longitud;
    }
    get nombre(){
        return this._nombre;
    }
    get latitud(){
        return this._latitud;
    }
    get longitud(){
        return this._longitud;
    }
    set nombre(){
        this._nombre = nombre;
    }
    set latitud(){
        this._latitud = latitud;
    }
    set longitud(){
        this._longitud = longitud;
    }
}

class Salidas{
    constructor(horaInicio,horaFin){
            this._horaInicio = horaInicio;
            this._horaFin = horaFin;
            this._secuencia = ['Rojos', 'Nuñez', 'UdC', 'FD', 'Sfco']
    }
    recorrido(){
        var ruta = new Ruta();
        var base = new Bases();

        var avance = 0;

        ruta.lugar = this._secuencia[avance];

        if(base._latitud && base._longitud == this._secuencia){
            this._horaInicio = ruta.tiempo;
            this._horaFin = 0;
            this._secuencia[avance] += 1;
        }

    }

}
var salida = new Salidas();
salida.recorrido();