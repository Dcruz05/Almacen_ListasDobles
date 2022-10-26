class Almacen{
    constructor(){
        this.primero=null;
        this.ultimo=null;
    }
    agregar(nuevo){
        if(!this.primero){
            this.primero = nuevo
        }else{
            let aux = this.primero
            while(aux.siguiente!=null){
                aux = aux.siguiente;
            }
            nuevo.anterior = aux
            aux.siguiente = nuevo
            this.ultimo = aux.siguiente
        }
    }
    listar(){
        let aux = this.primero;
        let lista = ""
        while(aux){
            lista += `${aux.codigo} `;
            aux= aux.siguiente;
        }
        return lista
    }
    listarInverso(){
        let aux = this.ultimo;
        let lista = ""
        while(aux){
            lista += `${aux.codigo} `
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
}