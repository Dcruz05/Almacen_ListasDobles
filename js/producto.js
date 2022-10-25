class Producto{
    constructor(codigo,nombre,cantidad,costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.siguiente=null;
        this.anterior=null;
    }
    info(){
        return `${this.codigo} - ${this.nombre}\n`
    }
    infoHTML(){
        return `<div><h4>${this.codigo} - ${this.nombre}</h4>
        <p>Cantidad : ${this.cantidad} - Precio $${this.costo}</p></div>`;
    }

}