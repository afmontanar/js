function Nodo(dato) {

        this.dato = dato;
        this.nodoDer = null;

    this.setNodoDer = function (der)
    {
        this.nodoDer=der;
    }


    this.getNodoDer = function ()
    {
        return this.nodoDer;
    }

    this.getDato = function ()
    {
    	return dato;
    }
    
}