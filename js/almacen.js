class Almacen{
    constructor(){
        this.primero=null;
        this.ultimo=null;
    }
    agregar(producto){
        if(this.buscar(producto.codigo)==null){
            if(this.primero==null){
                this.primero=producto
            }else{
                this.agregarSiguiente(producto,this.primero);
            }
            return true;
        }
        return false;
    }
    agregarSiguiente(producto,nodoX){
        if(nodoX.siguiente==null){
            nodoX.siguiente =producto
        }else{
            this.agregarSiguiente(producto,nodoX.siguiente)
        }
    }
    buscar(codigo){
        let aux=this.primero
        while(aux!=null){
            if(aux.codigo==codigo){
                return aux
            }else{
                aux=aux.siguiente;
            }
        }
        return null;
    }
    mostrarBusqueda(resultado){
        if(resultado!=null){
            return `${resultado.infoHTML()}`
        }else{
            return null;
        }
    }
    eliminar(codigo){
        let aux=this.primero
        if(aux.codigo==codigo){
            this.primero = aux.siguiente
            return true;
        }else{
            let siguiente = null;
            while(aux.siguiente!=null){
                siguiente= aux.siguiente;
                if(siguiente.codigo==codigo){
                    aux.siguiente=aux.siguiente.siguiente
                    return true;
                }else{
                    aux=aux.siguiente;
                }
            }
            return false;
        }
    }

    listar() {
        let lista = ""
        if(this.primero==null){return lista="No hay productos en el almacen"}
        lista = this.recorrer(this.primero)
        return lista
    }
    recorrer(nodo){
        if(nodo.siguiente==null){
          return `${nodo.infoHTML()}`
        }
        return `${nodo.infoHTML()}`+`${this.recorrer(nodo.siguiente)}`
    }

    listarInverso() {
        let lista = ""
        if(this.primero==null){return lista="No hay productos en el almacen"}
        lista = this.recorrerInverso(this.primero)
        return lista
    }
    recorrerInverso(nodo){
        if(nodo.siguiente==null){
          return `${nodo.infoHTML()}`
        }
        return `${this.recorrerInverso(nodo.siguiente)}`+`${nodo.infoHTML()}`
    }
}