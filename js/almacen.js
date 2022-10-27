class Almacen{
    constructor(){
        this.primero=null;
        this.ultimo=null;
    }
    agregar(nuevo){
        if(this.buscar(nuevo.codigo)!=null){
            return false;
        }
        if(!this.primero){
            this.primero = nuevo
            this.ultimo = nuevo
        }else{
            if(nuevo.codigo<this.primero.codigo){
                this.agregarPrimero(nuevo);
            }else if(nuevo.codigo>this.ultimo.codigo){
                this.agregarUltimo(nuevo);
            }else{
                let aux = this.primero
                while(aux.siguiente.codigo<nuevo.codigo){
                    aux = aux.siguiente;
                }
                nuevo.siguiente = aux.siguiente;
                nuevo.anterior=aux
                aux.siguiente.anterior=nuevo
                aux.siguiente = nuevo
            }
        }
        return true;
    }
    agregarPrimero(nuevo){
        this.primero.anterior=nuevo
        nuevo.siguiente=this.primero;
        this.primero=nuevo;
    }
    agregarUltimo(nuevo){
        this.ultimo.siguiente=nuevo;
        nuevo.anterior=this.ultimo;
        this.ultimo=nuevo;
    }
    listar(){
        let aux = this.primero;
        let lista = ""
        while(aux){
            lista += `${aux.infoHTML()} `;
            aux= aux.siguiente;
        }
        return lista
    }
    listarInverso(){
        let aux = this.ultimo;
        let lista = ""
        while(aux){
            lista += `${aux.infoHTML()} `
            aux= aux.anterior;
        }
        return lista
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
        if(this.buscar(codigo)==null){
            return false
        }
        let aux=this.primero
        if(this.primero.codigo==codigo){
            this.primero = aux.siguiente
            if(this.primero.anterior){
                this.primero.anterior=null;
            }
            return true;
        }else if(this.ultimo.codigo==codigo){
            this.ultimo.anterior.siguiente=null
            this.ultimo=this.ultimo.anterior
            return true;
        }else{
            while(aux.siguiente.codigo!=codigo){
                aux=aux.siguiente
            }
            aux.siguiente=aux.siguiente.siguiente
            aux.siguiente.anterior=aux
            return true;
        }
    }
}