/**
 * Refactorizar la lista de productos con el 
 * carrito de compras usando clases. 
 * Vamos a tener 3 tipos de productos, 
 *  1. Perfumes
 *  2. Chocolates
 *  3. Auriculares
 * Los 3 productos van a tener distintas 
 * caracteristicas, aunque compartan marca y precio.
 * Los chocolates tienen porcentaje, leche, tipo, 
 * extras (almendras, mani, pasas). 
 * Los auriculares van a tener una variable
 * "wireless" y una "tipo" (cerrados, abiertos)
 * 
 * Voy a necesitar un metodo que me devuelva una lista
 * formateada con todos los productos y caracteristicas 
 * en un texto. Uno por linea.
 * 
 * Ademas de eso cada producto puede tener descuentos, en 
 * porcentaje.
 * 
 * Hay que refactorizar el carrito de compras, de forma
 * que tenga lo mismo que hacia antes, pero a la hora de 
 * calcular el precio, lo haga teniendo en cuenta los
 * descuentos que aplican a cada producto.
 * 
 * El carrito tiene que tener una funcion que me permita
 * listar todos los productos agregados formateados con 
 * descripcion, cantidad, y un producto por linea.
 * 
 * Por ultimo sumar una clase cupon que tiene otro descuento
 * en porcentaje. Yo puedo aplicar un solo cupon a mi carrito
 * de compras y el calculo final del precio tiene que tomar
 * en cuenta esto.
 * 
 */

 class Carrito{
     constructor()
 }
class Catalogo {
    constructor(){
        this.lista=[]
    }
    agregar(producto){
        this.lista.push(producto)
    }
    enlistar(){
        let devolver=this.lista.map((producto)=>{
          return producto.datos // aca lo que hago es llamar a producto y la funcion que quiero que haga  en este caso un get que se llama datos
        })
        return devolver // siempre tengo que devolver algo independiemtemente del return del map
    }
}

class Producto{
    constructor(marca,precio,descuento){ //es lo primero que se ejecuta
        this.marca=marca;
        this.precio=precio;
        this.descuento=(descuento*this.precio)/100 // aca declaro que descuento va a ser igual a esta ecuacion
        this.precioDescuento=precio-this.descuento// y aca digo que el precio descuento va a ser igual al meprecio menos lo que resulto de arriba
    }  
}

class Perfume extends Producto{
    constructor(marca,precio,descuento){
    super(marca,precio,descuento);
    }
    get datos(){
        return `${this.marca} -precio ${this.precio}` ; 
    }
}

class Chocolate extends Producto{
    constructor(marca,precio,descuento,porcentaje,tipo,extras,leche=true){
        super(marca,precio,descuento);
        this.porcentaje=porcentaje;
        this.leche=leche;
        this.tipo=tipo;
        this.extras=extras;
    }
    get datos(){
        let tieneLeche=""; //creo un string vacio
        if(tieneLeche==true){  //Creo una condicion que me dice que si la varieble es igual a true me deveulta 
            tieneLeche="Con Leche" 
        }      
        return `${this.marca} -precio ${this.precio} -porcentaje ${this.porcentaje} -tipo ${this.tipo} -extras ${this.extras}`; 
    }
}
class Auricular extends Producto{
    constructor(marca,precio,descuento,tipo,wireless=true){
        super(marca,precio,descuento);
        this.wireless=wireless,
        this.tipo=tipo
    }
    reproducir(){
        if(!this.wireless){
            throw "No es wireless";
        }
        return true;
    }    
    get datos(){
        let esWireless=""; //creo un string vacio
        if(esWireless==true){  //Creo una condicion que me dice que si la varieble es igual a true me deveulta 
            esWireless="Es Wireless"// este string
        }
        return `${this.marca}-precio ${this.precio} -tipo ${this.tipo} ${this.esWireless}`; //con el get es la primera parte para poder 
    }
}

test('reproducir ',()=>{
    const auricular=new Auricular("sony",13.88,"abiertos",true)
    expect(auricular.reproducir()).toBe(true)

})

test ('agregar tarea  ',()=>{
    const catalogo = new Catalogo();
    const perfume1= new Perfume ("Carolina Herrera",2000,0);
    const chocolate1= new Chocolate ("Aguila",120,0,"50%",true,"En rama","almendra"); //En el test agregro los datos que se van a agregar en el push 
    const auriculares1= new Auricular("Sony",400,0,"cerrados");
    catalogo.agregar(perfume1)  //aca retomo la funcion del push para agregar estos datos porque simplemente los declaro arriba 
    catalogo.agregar(chocolate1)
    catalogo.agregar(auriculares1)
    expect(catalogo.lista.length).toBe(3); // aca estoy equiparando el largo de la lista con la cantidad de elementos

});

test('Devolver productos en una sola linea  ',()=>{
    const catalogo= new Catalogo();
    const chocolate1= new Chocolate ("Aguila",120,0,"50%",true,"En rama","almendra");
    const auriculares1= new Auricular("Sony",400,0,"cerrados"); //tengo que agragar productos porque sino me queda vacio el catalogo
    catalogo.agregar(chocolate1)
    catalogo.agregar(auriculares1)
    expect(catalogo.enlistar()[0]).toBe(chocolate1.datos);
    expect(catalogo.enlistar()[1]).toBe(auriculares1.datos); // datos como es un get no se pone como funcion es decir no se pone datos()
});

test('Aplicar descuento  ',()=>{
    const catalogo= new Catalogo();
    const perfume1= new Perfume ("Carolina Herrera",2000,30);
    catalogo.agregar(perfume1)
    expect(perfume1.precioDescuento).toBe(1400) //precioDescuento no va con () porque es una variable no una funcion

});


test('Aplicar descuento  ',()=>{
    const catalogo= new Catalogo();
    const catalogo= new Carrito();
    const perfume1= new Perfume ("Carolina Herrera",2000,30);
    const chocolate1= new Chocolate ("Aguila",120,0,"50%",true,"En rama","almendra",10);
    catalogo.agregar(perfume1)
    catalogo.agregar(chocolate1)
    carrito.agregar(perfume1)
    carrito.agregar(chocolate1)
    expect(carrito.obtenerPrecioFinal).toBe(1400) //precioDescuento no va con () porque es una variable no una funcion

});